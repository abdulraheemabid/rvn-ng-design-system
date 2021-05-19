import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { isNullOrUndefined } from '../../utils/funtions.util';
import { RvnConfirmDialogInput } from './rvn-confirm-dialog.input';

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
