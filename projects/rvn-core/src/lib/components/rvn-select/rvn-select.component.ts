import { Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { RvnStyleService } from '../../services/style/style.service';
import { CustomFormControlValueAccessor } from '../../utils/custom-form-control-value-accessor';
import { isKeyValue, isNullOrUndefined } from '../../utils/funtions.util';

import { RvnSelectInput } from './rvn-select.input';

@Component({
  selector: 'rvn-select',
  templateUrl: './rvn-select.component.html',
  styleUrls: ['./rvn-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RvnSelectComponent),
      multi: true
    }
  ]
})
export class RvnSelectComponent extends CustomFormControlValueAccessor implements OnInit {

  constructor(private _injector: Injector, private styleService: RvnStyleService) {
    super(_injector);
  }

  @Input() config: RvnSelectInput = null;
  formFieldAppearance: any;
  @Input() disabled: boolean;

  ngOnInit() {
    if (isNullOrUndefined(this.config)) this.config = { label: null, selectOptions: null };
    if (isNullOrUndefined(this.config.required)) this.config.required = false;
    if (isNullOrUndefined(this.config.requiredErrorMessage)) this.config.requiredErrorMessage = `${this.config.label} is required`;
    if (isNullOrUndefined(this.config.styleVersion)) this.config.styleVersion = 'v1';
    if (isNullOrUndefined(this.disabled)) this.disabled = false;
    this.formFieldAppearance = isNullOrUndefined(this.config?.appearance) ? this.styleService.getFormFieldStyle$ : of(this.config.appearance);
    this.initValueIfAlreadyExists();
  }

  initValueIfAlreadyExists() {
    if (!isNullOrUndefined(this.formControl.value)) {
      if (!isKeyValue(this.formControl.value)) this.formControl.setValue({ key: this.formControl.value, value: this.formControl.value }, { emitEvent: false });
      const selectedOption = this.config.selectOptions.find(o => o.key === this.formControl.value.key);
      this.formControl.setValue(selectedOption, { emitEvent: false });
    }
  }
}
