import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { isNullOrUndefined } from '@abdulraheemabid/rvn-pkg-ng-core';
import { FieldType } from '../../types';

/**
 * All definition renderers should inherit this calss which contains inputs and functions needed for each definition renderer.
 * All definition renderers need a FormGroup and selected type as inputs in order to output the content.
 */
@Component({
  selector: 'base-definition-renderer',
  templateUrl: './base-definition-renderer.component.html',
  styleUrls: ['./base-definition-renderer.component.scss']
})
export class BaseDefinitionRendererComponent {
  @Input() fieldFG: FormGroup;
  @Input() selectedType: FieldType;

  constructor(public fb: FormBuilder) { }

  createFormControlIfNotExists(controlName: string, defaultValue: unknown, validatorOptions?: ValidatorFn[], insideAttributes: boolean = false): FormControl {

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
