import { Injectable, ViewContainerRef } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { isNullOrUndefined } from "../../utils/funtions.util";

@Injectable({
  providedIn: "root"
})
export class RvnSnackBarService {

  constructor(private _snackBar: MatSnackBar) { }

  /**
   * Call this function to show a snackbar with the desired configuration (`SnackBarInput`).
   * 
   * Config defaults:
   * 1. horizontalPosition: 'center'
   * 2. verticalPosition: 'top'
   * 3. duration: 3000 ms
   * 4. message: 'Alert'
   */
  showSnackBar(input: SnackBarInput) {

    if (isNullOrUndefined(input)) input = { message: "Alert" };
    if (isNullOrUndefined(input.horizontalPosition)) input.horizontalPosition = "center";
    if (isNullOrUndefined(input.verticalPosition)) input.verticalPosition = "top";
    if (typeof input.duration === "undefined") input.duration = 3000;

    return this._snackBar.open(input.message, input.actionMessage, input);
  }

  /**
   * Call this funtion to open predefined success snack bar, just pass in a message
   */
  showSuccessAlert(message: string) {
    this.showSnackBar({ message, panelClass: ["snack-bar", "top", "center"] });
  }

  /**
   * Call this funtion to open predefined error snack bar, just pass in a message
   */
  showErrorAlert(message: string) {
    this.showSnackBar({ message, panelClass: ["warn-bg", "color-white", "text-bold", "snack-bar", "top", "center"] });
  }


}

export interface SnackBarInput {
  message: string;
  actionMessage?: string;
  horizontalPosition?: SnackBarHorizontalPosition;
  verticalPosition?: SnackBarVerticalPosition;
  panelClass?: string | string[];
  duration?: number;
  viewContainerRef?: ViewContainerRef;
}


export type SnackBarHorizontalPosition = "start" | "center" | "end" | "left" | "right";
export type SnackBarVerticalPosition = "bottom" | "top";
