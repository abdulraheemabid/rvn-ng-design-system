import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { isNullOrUndefined } from '../../utils/funtions.util';
import { RvnButtonInput } from '../rvn-button/rvn-button.component';

export interface RvnConfirmDialogInput {
  title?: string;
  messages?: string[];
  yesButtonMessage?: string;
  yesButtonConfig?: RvnButtonInput;
  noButtonMessage?: string;
  noButtonConfig?: RvnButtonInput;
}

/** 
 * Config defaults:
 * 1. title: ''
 * 2. messages: `['Are you sure?']`
 * 3. yesButtonMessage: 'Yes'
 * 4. noButtonMessage: 'No'
 * 5. yesButtonConfig: `{ type: 'tertiary' }`
 * 6. noButtonConfig: `{ type: 'tertiary' }`
 * 
 * Supported ng-content selectors
 * 1. none
 * 
 * ### Example
 * Use rvn-dialog-service to render this component
 * 
  ```ts
   this.dialogService.openConfirmDialog({
      title: 'Confirm Delete',
      messages: [`Form "${form.name}" will be deleted permanently and its child forms will become root forms.`, `Are you sure?`],
      noButtonMessage: "Cancel",
      yesButtonMessage: "Delete",
      yesButtonConfig: { type: 'tertiary', color: 'warn' }
    }).pipe(
      switchMap((confirmed: boolean) => {
        return confirmed ? this.formApiService.deleteForm(form.id) : of(null);
      }))
      .subscribe(val => {
        if (val) this.ngOnInit();
      })
  ```
 */
@Component({
  selector: 'rvn-confirm-dialog',
  templateUrl: './rvn-confirm-dialog.component.html',
  styleUrls: ['./rvn-confirm-dialog.component.scss']
})
export class RvnConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: RvnConfirmDialogInput) { }
  config: RvnConfirmDialogInput;
  ngOnInit() {
    this.config = this.data;
    if (isNullOrUndefined(this.config)) this.config = {};
    if (isNullOrUndefined(this.config.title)) this.config.title = "";
    if (isNullOrUndefined(this.config.messages)) this.config.messages = ["Are you sure?"];
    if (isNullOrUndefined(this.config.yesButtonMessage)) this.config.yesButtonMessage = "Yes";
    if (isNullOrUndefined(this.config.noButtonMessage)) this.config.noButtonMessage = "No";
    if (isNullOrUndefined(this.config.yesButtonConfig)) this.config.yesButtonConfig = { type: 'tertiary' };
    if (isNullOrUndefined(this.config.noButtonConfig)) this.config.noButtonConfig = { type: 'tertiary' };
  }
}
