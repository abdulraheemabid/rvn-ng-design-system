import { Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { of } from 'rxjs';
import { RvnStyleService } from '../../services/style/style.service';
import { CustomFormControlValueAccessor } from '../../utils/custom-form-control-value-accessor';
import { isNullOrUndefined } from '../../utils/funtions.util';
import { FormFieldAppearance } from "../../services/style/style.service";

export interface RvnInputInput {
    label: string;
    placeholder?: string;
    type?: "number" | "text",
    required?: boolean,
    hint?: string,
    requiredErrorMessage?: string,
    styleVersion?: "v1" | "v2",
    appearance?: FormFieldAppearance;
    suffixIcon?: string;
}

/**
 * FormControl required: true
 * 
 * Config defaults:
 * 1. type: 'text'
 * 2. required: false
 * 3. styleVersion: 'v1'
 * 4. requiredErrorMessage: `${this.config.label} is required`
 * 
 * Supported ng-content selectors
 * 1. none
 * 
 * @example
 * <rvn-input [config]="textFieldInput2" [formControl]="fc"></rvn-input>
 * 
 */
@Component({
  selector: 'rvn-input',
  templateUrl: './rvn-input.component.html',
  styleUrls: ['./rvn-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RvnInputComponent),
      multi: true
    }
  ]
})
export class RvnInputComponent extends CustomFormControlValueAccessor implements OnInit {

  constructor(private _injector: Injector, private styleService: RvnStyleService) {
    super(_injector);
  }


  @Input() config: RvnInputInput = null;
  formFieldAppearance: any;

  ngOnInit() {
    if (isNullOrUndefined(this.config)) this.config = { label: null };
    if (isNullOrUndefined(this.config.type)) this.config.type = "text";
    if (isNullOrUndefined(this.config.required)) this.config.required = false;
    if (isNullOrUndefined(this.config.requiredErrorMessage)) this.config.requiredErrorMessage = `${this.config.label} is required`;
    if (isNullOrUndefined(this.config.styleVersion)) this.config.styleVersion = 'v1';
    this.formFieldAppearance = isNullOrUndefined(this.config?.appearance) ? this.styleService.getFormFieldStyle$ : of(this.config.appearance);
  }

}
