import { FormFieldAppearance } from "../../services/style/style.service";

export interface RvnInputInput {
    label: string;
    placeholder?: string;
    type?: "number" | "text",
    required?: boolean,
    hint?: string,
    requiredErrorMessage?: string,
    styleVersion?: "v1" | "v2",
    appearance?: FormFieldAppearance;
    suffixIcon?: string;
}