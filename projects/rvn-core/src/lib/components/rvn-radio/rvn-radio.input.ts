import { KeyValue } from "@angular/common";

export interface RvnRadioInput {
    label: string;
    required?: boolean;
    requiredErrorMessage?: string;
    radioOptions: KeyValue<any, any>[];
    styleVersion?: "v1" | "v2" | "v3"
}