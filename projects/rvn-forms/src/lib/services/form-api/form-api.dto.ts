import { FieldType } from "../../types";


//DTOs
export interface FormDTO {
    id?: number;
    name: string;
    fields: FormFieldDTO[];
    attributes?: FormAttributesDTO;
}

export interface FormParentDTO {
    formId: number;
    relationType: ChildRelationType;
}
export interface FormAttributesDTO {
    parentForm?: FormParentDTO;
    [key: string]: any;
}

export interface FormUpdateDTO {
    name?: string;
    fields?: FormFieldDTO[];
    attributes?: {};
}

export interface FormFieldDTO {
    //need for update case
    id?: number;
    name: string;
    type: FieldType;
    required: boolean;
    validationRegex?: string;
    arrayValues?: string[];
    attributes?: {};
    //need for update case
    markDeleted?: boolean;
}

export interface FormIdDTO {
    formId: number;
}

export interface RecordDTO {
    formId: number;
    entry: any;
    attributes?: JSON;
}

export interface RecordUpdateDTO {
    formId: number;
    id: number;
    entry: any;
    attributes?: JSON;
}

export interface RecordIdDTO {
    formId: number;
    recordId: number;
}

export type ChildRelationType = "one-to-one" | "many-to-one";