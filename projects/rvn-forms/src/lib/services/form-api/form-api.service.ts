import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { switchMap, map } from "rxjs/operators";
import { isKeyValue, isNullOrUndefined } from '@abdulraheemabid/rvn-pkg-ng-core';
import { TypeMetaService } from "../type-meta-service/type-meta.service";
import { IForm, IFormFieldAtrribute, IFormRelation, IId, IRecord } from "../../types";
import { FormDTO, ChildRelationType } from "./form-api.dto";
import { Environment } from "../../forms-service.module";


/**
 * This service is responsible for calling the server and transforming the payload pre/post REST call.
 * All API calls should be encapsulated here. If this class becomes huge, then create other services also create a seperate APIService module. 
 */
@Injectable({
  providedIn: 'root'
})
export class FormApiService {

  constructor(
    private httpClient: HttpClient,
    private typeService: TypeMetaService,
    @Inject("environment") private environment: Environment) { }

  baseUrl: string = this.environment.restBaseUrl;

  getForm(id: number): Observable<IForm> {
    return this.httpClient.get<FormDTO>(`${this.baseUrl}/${id}`)
      .pipe(
        switchMap(form => of(this.transformFormFromDTO(form)))
      );
  }

  getFormDirectChildren(id: number): Observable<number[]> {
    return this.httpClient.get<number[]>(`${this.baseUrl}/${id}/direct-children`);
  }

  getForms() {
    return this.httpClient.get<IForm[]>(this.baseUrl).pipe(
      map(forms => forms.sort((a, b) => a.id - b.id))
    );
  }

  getFormTrees() {
    return this.httpClient.get<IFormRelation[]>(`${this.baseUrl}/trees/all`);
  }

  createForm(form: IForm) {
    const dto = this.transformFormToDTO(form);
    return this.httpClient.post<IId>(this.baseUrl, dto);
  }

  updateForm(form: IForm) {
    const dto = this.transformFormToDTO(form);
    return this.httpClient.patch<IId>(`${this.baseUrl}/${form.id}`, dto);
  }

  deleteForm(id: number) {
    return this.httpClient.delete<IId>(`${this.baseUrl}/${id}`);
  }

  getRecord(formId: number, recordId: number): Observable<IRecord> {
    return this.httpClient.get<IRecord>(`${this.baseUrl}/${formId}/record/${recordId}`)
      .pipe(
        switchMap(record => of(this.transformRecordFromDTO(record)))
      );
  }

  getRecords(formId: number, parentRecordId?: number): Observable<IRecord[]> {
    if (isNullOrUndefined(parentRecordId)) parentRecordId = -1;
    return this.httpClient.get<IRecord[]>(`${this.baseUrl}/${formId}/record?parentId=${parentRecordId}`)
      .pipe(
        map(records => records.sort((a, b) => a.id - b.id)),
        switchMap(records => of(records.map(r => this.transformRecordFromDTO(r))))
      );
  }

  createRecord(formId: number, record: IRecord): Observable<IId> {
    const dto = this.transformRecordToDTO(record);
    return this.httpClient.post<IId>(`${this.baseUrl}/${formId}/record`, dto);
  }

  updateRecord(formId: number, record: IRecord): Observable<IId> {
    const dto = this.transformRecordToDTO(record);
    return this.httpClient.patch<IId>(`${this.baseUrl}/${formId}/record/${dto.id}`, dto);
  }

  deleteRecord(formId: number, recordId: number, newParentRecordId?: number): Observable<IId> {
    if (!isNullOrUndefined(newParentRecordId))
      return this.httpClient.delete<IId>(`${this.baseUrl}/${formId}/record/${recordId}?parentId=${newParentRecordId}`);
    return this.httpClient.delete<IId>(`${this.baseUrl}/${formId}/record/${recordId}`);
  }


  private transformFormToDTO(form: IForm): FormDTO {
    const parentForm = !isNullOrUndefined(form?.attributes?.parentForm?.formId) ?
      // FUTURE: TODO: this hardcoded many-to-one would be removed
      { formId: form.attributes.parentForm.formId["key"], relationType: "many-to-one" as ChildRelationType } :
      null;

    return {
      id: form.id,
      name: form.name,
      attributes: { ...form.attributes, parentForm },
      fields: form.fields.map(f => {
        return {
          ...f,
          type: f.type.key,
          arrayValues: f.arrayValues?.map(v => v.value)
        }
      })
    };
  }

  private transformFormFromDTO(form: FormDTO): IForm {
    return {
      id: form.id,
      name: form.name,
      attributes: form.attributes,
      fields: form.fields.sort((a, b) => a?.attributes["position"] - b?.attributes["position"]).map(f => {
        const typeDisplayValue = this.typeService.getFieldTypes().find(ft => ft.key === f.type).value;
        return {
          ...f,
          attributes: f.attributes as IFormFieldAtrribute,
          arrayValues: f.arrayValues?.map(v => { return { "key": v, "value": v } }),
          type: { key: f.type, value: typeDisplayValue }
        }
      })
    }
  }

  private transformRecordToDTO(record: IRecord) {

    if (isNullOrUndefined(record.attributes.parent.recordId))
      record.attributes.parent = null;

    Object.keys(record.entry).forEach(key => {
      let value = record.entry[key];

      if (Array.isArray(value)) {
        value = value.map(item => {
          return isKeyValue(item) ? item.key : item;
        });
      } else {
        value = isKeyValue(value) ? value.key : value;
      }

      record.entry[key] = value;
    })

    return record;
  }

  private transformRecordFromDTO(record: IRecord) {
    Object.keys(record.entry).forEach(key => {
      let value = record.entry[key];

      if (Array.isArray(value)) {
        value = value.map(item => {
          return { key: item, value: item };
        });
      } else if (typeof value === "boolean") {
        value = { key: value, value: value.toString() };
      }

      record.entry[key] = value;
    })

    return record;
  }
}
