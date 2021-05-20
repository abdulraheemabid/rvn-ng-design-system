import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomFormControlValueAccessor } from '../../utils/custom-form-control-value-accessor';
import { isNullOrUndefined } from '../../utils/funtions.util';
import { KeyValue } from "@angular/common";

export interface RvnCheckboxInput {
  label: string;
  checkboxOptions: KeyValue<any, any>[];
  styleVersion?: "v1" | "v2" | 'v3';
  mode?: 'standard' | 'boolean-display';
  requiredErrorMessage?: string;
}

@Component({
  selector: 'rvn-checkbox',
  templateUrl: './rvn-checkbox.component.html',
  styleUrls: ['./rvn-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RvnCheckboxComponent),
      multi: true
    }
  ]
})
export class RvnCheckboxComponent extends CustomFormControlValueAccessor implements OnInit {

  @Input() config: RvnCheckboxInput = null;
  formGroup: FormGroup = new FormGroup({});
  checkBoxArray: FormArray;
  // used only for display mode
  checked: boolean = false;


  ngOnInit() {
    if (isNullOrUndefined(this.config)) this.config = { 'label': null, checkboxOptions: [] };
    if (isNullOrUndefined(this.config.styleVersion)) this.config.styleVersion = 'v1';
    if (isNullOrUndefined(this.config.mode)) this.config.mode = 'standard';
    if (isNullOrUndefined(this.config.requiredErrorMessage)) this.config.requiredErrorMessage = `${this.config.label} is required`;

    if (this.config.mode === "standard") {
      this.checkBoxArray = this.initFormArray();
      this.checkBoxArray.valueChanges.subscribe(selectedValues => this.syncControls(selectedValues));
    } else {
      this.checked = !isNullOrUndefined(this.formControl) && !isNullOrUndefined(this.formControl.value) ? this.formControl.value.key : false;
      this.formControl.disable();
    }
  }

  initFormArray() {
    this.formGroup.addControl("checkboxArray", new FormArray([]));
    let array = this.formGroup.get('checkboxArray') as FormArray;

    if (isNullOrUndefined(this.formControl.value)) {
      this.config.checkboxOptions.forEach(option => array.push(new FormControl(false)));
    } else {
      this.config.checkboxOptions.forEach(option => {
        const isValidOption = this.formControl.value.find(v => v.key === option.key && v.value === option.value);
        if (!isNullOrUndefined(isValidOption)) array.push(new FormControl(true));
        else array.push(new FormControl(false));
      })
    }

    return array;
  }

  syncControls(selectedValues: boolean[]) {
    let valuesToSet = [];
    selectedValues.forEach((sv, i) => {
      if (sv) valuesToSet.push(this.config.checkboxOptions[i])
    });
    this.formControl.setValue(valuesToSet);
  }
}
