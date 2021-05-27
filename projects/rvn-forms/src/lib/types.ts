import { KeyValue } from "@angular/common";

export interface IForm {
    id?: number;
    name: string;
    fields: IFormField[];
    attributes?: IFormAttributes;
    createdOn?: string;
    updatedOn?: string;
}

export interface IFormAttributes {
    parentForm?: IFormParent;
    [key: string]: any;
}

export interface IFormParent {
    formId: number;
    relationType: ChildRelationType;
}

export interface IFormField {
    id?: number;
    name: string;
    type: KeyValue<FieldType, string>;
    required: boolean;
    validationRegex?: string;
    arrayValues?: KeyValue<string, string>[];
    attributes?: IFormFieldAtrribute;
    markDeleted?: boolean;
    createdOn?: string;
    updatedOn?: string;
}

export interface IFormFieldAtrribute {
    position: number;
    displayAs?: KeyValue<string, UIControlEnum>;
}

export interface IRecord {
    id?: number;
    entry: any;
    attributes?: IRecordAttributes;
    createdOn?: string;
    updatedOn?: string;
}

export interface IRecordAttributes{
    parent?: IRecordParent;
    [key: string]: any;
}

export interface IRecordParent{
    recordId: number
}

export type IFieldTypeMetaConfig = {
    [key in FieldType]: IFieldTypeMeta;
};

export interface IFieldTypeMeta {
    typeDisplayName: string;
    definitionRenderer: any;
    inputRenderers: {
        UIControl: UIControlEnum,
        renderer: any
    }[];
    valueRenderers: {
        renderer: any
    }[];
}

export interface IFormRelation {
    id: number;
    formId: number;
    relationType: "one-to-one" | "many-to-one";
    children: IFormRelation[];
    parent?: IFormRelation;
    createdOn?: string;
    updatedOn?: string;
}

export interface IId {
    id: number
}

export type FieldType = "float" | "int" | "string" | "date" | "bool" | "multiselect" | "singleselect";
export type ChildRelationType = "one-to-one" | "many-to-one";

export enum UIControlEnum {
    SELECT = "SELECT",
    INPUT = "INPUT",
    CHECKBOX = "CHECKBOX",
    RADIO = "RADIO",
    DATEPICKER = "DATEPICKER",
    CHIPSINPUT = "CHIPSINPUT",
    TOGGLE = "TOGGLE"
}

export enum UIControlNameEnum {
    SELECT = "Dropdown",
    INPUT = "Text field",
    NUMBERINPUT = "Number field",
    CHECKBOX = "Chekbox",
    RADIO = "Radio",
    DATEPICKER = "Date picker",
    CHIPSINPUT = "Chips",
    TOGGLE = "Swtich"
}