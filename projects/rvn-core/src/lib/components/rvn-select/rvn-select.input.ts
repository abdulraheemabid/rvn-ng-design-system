import { KeyValue } from "@angular/common";
import { FormFieldAppearance } from "../../services/style/style.service";

export interface RvnSelectInput {
    label: string;
    placeholder?: string;
    required?: boolean;
    hint?: string;
    requiredErrorMessage?: string;
    selectOptions: KeyValue<any, any>[];
    styleVersion?: "v1" | "v2";
    appearance?: FormFieldAppearance;
}