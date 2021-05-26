import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RecordParentInputRendererInput } from '../../type-input-renderers/record-parent-input-renderer/record-parent-input-renderer.component';
import { IForm, IRecord } from "../../types";

export interface RecordDeleteConfirmInput {
  valueFC: FormControl;
  parentForm: IForm;
  parentRecords: IRecord[];
}

/**
 * This opens up the delete confirmation screen which can be opened in a dialog.
 * Its used for taking a parent record id from user as its a requirement of RvnForms.
 * 
 * Its takes a formControl which will be binded with user input along with parent form and records for selection list.
 * 
 * It wraps record-parent-input-renderer component for parent selection.
 */
@Component({
  selector: 'record-delete-confirm',
  templateUrl: './record-delete-confirm.component.html',
  styleUrls: ['./record-delete-confirm.component.scss']
})
export class RecordDeleteConfirmComponent implements OnInit {

  constructor() { }

  formControl: FormControl = new FormControl("", [Validators.required]);
  @Input() config: RecordDeleteConfirmInput;
  rendererConfig: RecordParentInputRendererInput;

  ngOnInit(): void {
    this.rendererConfig = { ...this.config, showDummy: false };
  }

}
