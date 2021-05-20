import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RecordParentInputRendererInput } from '../../type-input-renderers/record-parent-input-renderer/record-parent-input-renderer.component';
import { IForm, IRecord } from "../../types";

export interface RecordDeleteConfirmInput{
  valueFC: FormControl;
  parentForm: IForm;
  parentRecords: IRecord[];
}

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
