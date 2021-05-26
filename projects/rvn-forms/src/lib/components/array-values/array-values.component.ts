import { RvnChipsInputInput } from '@abdulraheemabid/rvn-pkg-ng-core';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

export interface ArrayValuesInput {
  uiFormControl: FormControl;
}
/**
 * Used to render array values of a given fields.
 * Ideally wouldnt need to use this component directly, it will be only used by form-definition-renderer 
 */
@Component({
  selector: 'array-values',
  templateUrl: './array-values.component.html',
  styleUrls: ['./array-values.component.scss']
})
export class ArrayValuesComponent implements OnInit {

  constructor() { }

  @Input() config: ArrayValuesInput;
  
  chipsCompConfig: RvnChipsInputInput = { label: 'Options', placeholder: 'Type an option, press enter for next', required: true };

  ngOnInit(): void {
  }

}
