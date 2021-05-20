import { KeyValue } from '@angular/common';
import { Injectable } from '@angular/core';
import { FieldType, IFieldTypeMeta } from '../../types';
import { fieldTypeMetaDataMap } from './field-type-metadata';

@Injectable({
  providedIn: 'root'
})
export class TypeMetaService {

  constructor() { }

  fieldTypeMeta = fieldTypeMetaDataMap;

  getFieldTypes(): KeyValue<FieldType, string>[] {
    let result = [];

    this.fieldTypeMeta.forEach((value: IFieldTypeMeta, key: FieldType) => {
      result.push(
        {
          key,
          value: value.typeDisplayName
        })
    });

    return result;
  }

  getFieldTypeMetaData(fieldType: FieldType | KeyValue<FieldType, string>): IFieldTypeMeta {
    if (typeof fieldType !== "string") fieldType = fieldType.key;
    return this.fieldTypeMeta.get(fieldType);
  }

  getValueRendererByType(fieldType: FieldType) {
    return this.fieldTypeMeta.get(fieldType).valueRenderers[0].renderer;
  }
}