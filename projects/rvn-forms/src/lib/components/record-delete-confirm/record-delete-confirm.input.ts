import { FormControl } from "@angular/forms";
import { IForm, IRecord } from "../../types";

export interface RecordDeleteConfirmInput{
  valueFC: FormControl;
  parentForm: IForm;
  parentRecords: IRecord[];
}