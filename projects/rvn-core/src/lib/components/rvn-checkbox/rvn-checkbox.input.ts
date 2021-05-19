import { KeyValue } from "@angular/common";

export interface RvnCheckboxInput {
    label: string;
    checkboxOptions: KeyValue<any, any>[];
    styleVersion?: "v1" | "v2" | 'v3';
    mode?: 'standard' | 'boolean-display';
    requiredErrorMessage?: string;
}