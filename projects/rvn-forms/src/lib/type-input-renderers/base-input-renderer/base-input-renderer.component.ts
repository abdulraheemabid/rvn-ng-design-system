import { DynamicComponentService } from '@abdulraheemabid/rvn-pkg-ng-core';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { IFormField, UIControlEnum } from '../../types';

/**
 * All input renderers should inherit this calss which contains inputs and properties needed for each input renderer.
 * All input renderers need a Form Control to store and validate value along with which UIControl to display and the field's definition.
 */
@Component({
  selector: 'base-input-renderer',
  templateUrl: './base-input-renderer.component.html',
  styleUrls: ['./base-input-renderer.component.scss']
})
export class BaseInputRendererComponent {
  constructor(
    public dynamicComponentService: DynamicComponentService,
    public fb: FormBuilder) { }

  @Input() valueFC: FormControl;
  @Input() UIControl: UIControlEnum;
  @Input() fieldDefinition: IFormField;
  UIControlEnum = UIControlEnum;

}
