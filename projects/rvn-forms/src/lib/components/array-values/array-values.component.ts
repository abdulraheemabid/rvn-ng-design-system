import { RvnChipsInputInput } from '@abdulraheemabid/rvn-pkg-ng-core';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

export interface ArrayValuesInput {
  uiFormControl: FormControl;
}

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
