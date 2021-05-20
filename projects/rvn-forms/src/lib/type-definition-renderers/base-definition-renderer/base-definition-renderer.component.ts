import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { isNullOrUndefined } from '@abdulraheemabid/rvn-pkg-ng-core';
import { FieldType } from '../../types';

@Component({
  selector: 'base-definition-renderer',
  templateUrl: './base-definition-renderer.component.html',
  styleUrls: ['./base-definition-renderer.component.scss']
})
export class BaseDefinitionRendererComponent {
  @Input() fieldFG: FormGroup;
  @Input() selectedType: FieldType;

  constructor(public fb: FormBuilder) { }

  createFormControlIfNotExists(controlName: string, defaultValue: any, validatorOptions?: any[], insideAttributes: boolean = false): FormControl {

    let fg = insideAttributes ? this.fieldFG.get("attributes") as FormGroup : this.fieldFG;

    const valueToSet = isNullOrUndefined(fg.get(controlName)) ? defaultValue : fg.get(controlName).value;

    if (isNullOrUndefined(fg.get(controlName)))
      fg.addControl(controlName, this.fb.control(defaultValue, validatorOptions));

    let fc = fg.get(controlName) as FormControl;

    fc.setValue(valueToSet, { emitEvent: false });

    fc.markAsPristine();

    return fc;

  }
}
