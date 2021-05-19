import { FormFieldAppearance } from "../../services/style/style.service";

export interface RvnDatepickerInput {
    label: string;
    placeholder?: string;
    required?: boolean,
    hint?: string,
    requiredErrorMessage?: string,
    styleVersion?: "v1" | "v2",
    appearance?: FormFieldAppearance;
}