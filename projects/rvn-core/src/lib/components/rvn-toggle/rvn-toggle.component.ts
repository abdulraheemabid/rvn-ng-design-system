import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomFormControlValueAccessor } from '../../utils/custom-form-control-value-accessor';
import { isKeyValue, isNullOrUndefined } from '../../utils/funtions.util';

export interface RvnToggleInput {
  label: string;
  required?: boolean;
  requiredErrorMessage?: string;
  styleVersion?: "v1" | "v2" 
}

/**
 * FormControl required: true
 * 
 * Config defaults:
 * 1. styleVersion: 'v1'
 * 2. required: true
 * 3. requiredErrorMessage: `${this.config.label} is required`
 * 
 * Supported ng-content selectors
 * 1. none
 * 
 * @example
 *  <rvn-toggle [config]="toggleInput" [formControl]="fc"></rvn-toggle>
 * 
 */
@Component({
  selector: 'rvn-toggle',
  templateUrl: './rvn-toggle.component.html',
  styleUrls: ['./rvn-toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RvnToggleComponent),
      multi: true
    }
  ]
})
export class RvnToggleComponent extends CustomFormControlValueAccessor implements OnInit {

  @Input() config: RvnToggleInput = null;

  ngOnInit() {
    if (isNullOrUndefined(this.config)) this.config = {} as RvnToggleInput;
    if (isNullOrUndefined(this.config?.required)) this.config.required = false;
    if (isNullOrUndefined(this.config?.requiredErrorMessage)) this.config.requiredErrorMessage = `${this.config.label} is required`;
    if (isNullOrUndefined(this.config?.styleVersion)) this.config.styleVersion = 'v1';

    if (!isNullOrUndefined(this.formControl.value) && isKeyValue(this.formControl.value)) {
      this.formControl.setValue(this.formControl.value.key);
    }
  }

}
