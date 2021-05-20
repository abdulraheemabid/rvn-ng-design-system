import { FormControl } from "@angular/forms";
import { IForm, IRecord } from "../../types";

export interface RecordParentInputRendererInput {
  valueFC: FormControl;
  parentForm: IForm;
  parentRecords: IRecord[];
  showDummy: boolean;
  disableButton?: boolean;
}