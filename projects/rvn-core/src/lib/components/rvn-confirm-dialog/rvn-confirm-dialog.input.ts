import { RvnButtonInput } from "../rvn-button/rvn-button.input";

export interface RvnConfirmDialogInput{
  title?: string;
  messages?: string[];
  yesButtonMessage?: string;
  yesButtonConfig?: RvnButtonInput;
  noButtonMessage?: string;
  noButtonConfig?: RvnButtonInput;
}