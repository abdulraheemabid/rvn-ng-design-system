import { isNullOrUndefined } from '@abdulraheemabid/rvn-pkg-ng-core';
import { KeyValue } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { FieldType, IFieldTypeMeta, IFieldTypeMetaConfig } from '../../types';
import { fieldTypeMetaDataConfig } from './field-type-metadata';

@Injectable({
  providedIn: 'root'
})
export class TypeMetaService {

  fieldTypeMeta;

  constructor(@Inject("typeMetaConfig") private overridenConfig: IFieldTypeMetaConfig) {
    let config = fieldTypeMetaDataConfig;
    if (!isNullOrUndefined(overridenConfig)) config = { ...config, ...overridenConfig };
    this.fieldTypeMeta = new Map(Object.entries(config));
  }

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