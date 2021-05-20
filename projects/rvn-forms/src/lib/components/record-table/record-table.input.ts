import { TemplateRef } from "@angular/core";
import { RvnTableInput } from '@abdulraheemabid/rvn-pkg-ng-core';
import { IForm } from "../../types";

export interface RecordTableInput {
  tableConfig: RvnTableInput;
  formDefinition: IForm;
  actionsTemplate?: TemplateRef<any>;
}