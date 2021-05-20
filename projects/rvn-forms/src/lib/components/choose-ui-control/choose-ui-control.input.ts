import { FormControl } from "@angular/forms";
import { FieldType } from "../../types";

export interface ChooseUiControlInput {
  selectedFieldType: FieldType;
  uiFormControl: FormControl;
}