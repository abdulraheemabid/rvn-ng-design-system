import { KeyValue } from '@angular/common';
import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DynamicComponentService, isNullOrUndefined } from '@abdulraheemabid/rvn-pkg-ng-core';
import { TypeMetaService } from '../type-meta-service/type-meta.service';
import { FieldType, IFormField, IForm, IRecord } from '../../types';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private typeMetaService: TypeMetaService, private dynamicComponentService: DynamicComponentService, private fb: FormBuilder) { }

  injectTypeDefinitionRenderer(type: KeyValue<FieldType, string>, viewContainerRef: ViewContainerRef, fieldFormGroup: FormGroup): Observable<ComponentRef<any>> {

    const componentToRender = this.typeMetaService.getFieldTypeMetaData(type)?.definitionRenderer;

    if (!componentToRender) return new Observable<ComponentRef<any>>(sub => sub.error("cant find componentToRender"));

    const inputs: KeyValue<string, any>[] = [{ key: "fieldFG", value: fieldFormGroup }, { key: "selectedType", value: type.key }]

    return this.dynamicComponentService.injectComponent(viewContainerRef, componentToRender, inputs);

  }

  injectTypeInputRenderer(field: IFormField, viewContainerRef: ViewContainerRef, valueFC: FormControl): Observable<ComponentRef<any>> {

    let typeMeta = this.typeMetaService.getFieldTypeMetaData(field.type);
    let rendererConfig;
    let componentToRender;

    if (typeMeta.inputRenderers.length === 1) rendererConfig = typeMeta.inputRenderers[0];
    else if (!isNullOrUndefined(field.attributes?.displayAs?.key)) rendererConfig = typeMeta.inputRenderers.filter(r => r.UIControl === field.attributes.displayAs.key)[0];
    else return new Observable<ComponentRef<any>>(sub => sub.error("field.attributes?.displayAs?.key not set"));

    componentToRender = rendererConfig.renderer;

    const input = [{ key: "UIControl", value: rendererConfig.UIControl }, { key: "valueFC", value: valueFC }, , { key: "fieldDefinition", value: field }];

    return this.dynamicComponentService.injectComponent(viewContainerRef, componentToRender, input);

  }

  injectTypeValueRenderer(fieldType: FieldType, viewContainerRef: ViewContainerRef, value: any): Observable<ComponentRef<any>> {

    let typeMeta = this.typeMetaService.getFieldTypeMetaData(fieldType);
    const rendererConfig = typeMeta.valueRenderers[0];
    const componentToRender = rendererConfig.renderer;
    const input = [{ key: "value", value }];

    return this.dynamicComponentService.injectComponent(viewContainerRef, componentToRender, input);

  }

  getNewRecordFG(formDefinition: IForm, keyForFieldControlId: string = "id") {
    const parentValidator = isNullOrUndefined(formDefinition?.attributes?.parentForm?.formId) ? [] : [Validators.required];
    let recordFg = this.fb.group({
      attributes: this.fb.group({
        parent: this.fb.group({
          recordId: [null, parentValidator]
        })
      }),
      entry: this.fb.group({})
    });
    formDefinition.fields.forEach(f => {
      if (f.markDeleted !== true) {
        const validators = f.required ? [Validators.required] : [];
        (recordFg.get("entry") as FormGroup).addControl(f[keyForFieldControlId].toString(), this.fb.control(null, validators));
      }
    });
    return recordFg;
  }

  getRecordFG(formDefinition: IForm, record: IRecord) {
    const parentValidator = isNullOrUndefined(formDefinition?.attributes?.parentForm?.formId) ? [] : [Validators.required];
    let recordFg = this.fb.group({
      attributes: this.fb.group({
        parent: this.fb.group({
          recordId: [null, parentValidator]
        })
      }),
      entry: this.fb.group({})
    });

    formDefinition.fields.forEach(f => {
      const parent = isNullOrUndefined(record?.attributes?.parent?.recordId) ? null : record.attributes.parent.recordId;
      recordFg.get("attributes").get("parent").get("recordId").setValue(parent, { emitEvent: false });

      if (f.markDeleted !== true) {
        const validators = f.required ? [Validators.required] : [];
        (recordFg.get("entry") as FormGroup).addControl(f.id.toString(), this.fb.control(record.entry[f.id], validators));
      }
    });
    return recordFg;
  }

  getDefinitionFG(form: IForm) {
    let fg = this.fb.group({
      id: [form.id],
      attributes: this.fb.group({
        parentForm: this.fb.group({
          formId: [form?.attributes?.parentForm?.formId || null],
          // FUTURE: TODO: will have one-to-one too. this will need to be updated
          relationType: ["many-to-one"]
        })
      }),
      name: [form.name, [Validators.required, Validators.minLength(3)]],
      fields: this.fb.array([])
    });

    let fields = fg.get("fields") as FormArray;

    form.fields.forEach(fieldDef => {
      let fieldGrp = this.fb.group({
        id: [fieldDef.id],
        name: [fieldDef.name, [Validators.required, Validators.minLength(3)]],
        type: [fieldDef.type, Validators.required],
        required: [fieldDef.required],
        markDeleted: [false],
        attributes: this.fb.group({
          _expanded: [true],
          position: [null]
        })
      });

      if (typeof fieldDef.arrayValues !== "undefined") fieldGrp.addControl("arrayValues", this.fb.control(fieldDef.arrayValues));
      if (typeof fieldDef?.attributes?.position !== "undefined") fieldGrp.get("attributes").get("position").setValue(fieldDef.attributes.position);
      if (typeof fieldDef?.attributes?.displayAs !== "undefined") (fieldGrp.get("attributes") as FormGroup).addControl("displayAs", this.fb.control(fieldDef.attributes.displayAs));

      fields.push(fieldGrp);
    });

    return fg;

  }

  getNewDefinitionFG() {
    return this.fb.group({
      attributes: this.fb.group({
        parentForm: this.fb.group({
          formId: [null],
          // FUTURE: TODO: will have one-to-one too. this will need to be updated
          relationType: ["many-to-one"]
        })
      }),
      name: ['', [Validators.required, Validators.minLength(3)]],
      fields: this.fb.array([])
    })
  }

  getNewFieldFG() {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      type: [undefined, Validators.required],
      required: [false],
      attributes: this.fb.group({
        _expanded: [true],
        position: [null]
      })
    });
  }

  getSingularFormName(form: IForm | string) {
    let name = typeof form === 'string' ? form : form.name;
    if (name.toLocaleLowerCase().endsWith('s')) name = name.slice(0, -1);
    return name;
  }

  getDummyFormAndRecords() {
    return {
      form: {
        id: -1,
        name: "Dummy Form",
        fields: [
          { id: -1, name: "Dummy Field 1", type: { key: "string", value: "Text" }, attributes: { position: 0 } },
          { id: -2, name: "Dummy Field 2", type: { key: "string", value: "Text" }, attributes: { position: 1 } }
        ]
      } as IForm,
      records: [
        {
          id: -1,
          updatedOn: Date.now().toString(),
          entry: { "-1": "Dummy Value 1", "-2": "Dummy Value 2" }
        },
        {
          id: -2,
          updatedOn: Date.now().toString(),
          entry: { "-1": "Dummy Value 3", "-2": "Dummy Value 4" }
        },
      ] as IRecord[]
    }
  }

}