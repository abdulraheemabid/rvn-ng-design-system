import { Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { of } from 'rxjs';
import { RvnStyleService } from '../../services/style/style.service';
import { CustomFormControlValueAccessor } from '../../utils/custom-form-control-value-accessor';
import { isNullOrUndefined } from '../../utils/funtions.util';
import { RvnDatepickerInput } from './rvn-datepicker.input';

@Component({
  selector: 'rvn-datepicker',
  templateUrl: './rvn-datepicker.component.html',
  styleUrls: ['./rvn-datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RvnDatepickerComponent),
      multi: true
    }
  ]
})
export class RvnDatepickerComponent extends CustomFormControlValueAccessor implements OnInit {

  constructor(private _injector: Injector, private styleService: RvnStyleService) {
    super(_injector);
  }

  @Input() config: RvnDatepickerInput = null;
  formFieldAppearance: any;

  ngOnInit() {
    if (isNullOrUndefined(this.config)) this.config = { label: null };
    if (isNullOrUndefined(this.config.required)) this.config.required = false;
    if (isNullOrUndefined(this.config.requiredErrorMessage)) this.config.requiredErrorMessage = `${this.config.label} is required`;
    if (isNullOrUndefined(this.config.styleVersion)) this.config.styleVersion = 'v1';
    this.formFieldAppearance = isNullOrUndefined(this.config?.appearance) ? this.styleService.getFormFieldStyle$ : of(this.config.appearance);
  }

}
