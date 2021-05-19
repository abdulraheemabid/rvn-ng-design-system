import { KeyValue } from "@angular/common";
import { RvnButtonInput } from "../rvn-button/rvn-button.input";

export interface RvnComponentDialogInput {
  title?: string;
  component: any;
  componentInputs?: KeyValue<string, any>[];
  showActionBtns?: boolean;
  showOnlyPrimaryButton?: boolean;
  primaryButtonMessage?: string;
  primaryButtonConfig?: RvnButtonInput;
  secondaryButtonMessage?: string;
  secondaryButtonConfig?: RvnButtonInput;
}