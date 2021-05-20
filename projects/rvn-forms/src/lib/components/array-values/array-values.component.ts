import { RvnChipsInputInput } from '@abdulraheemabid/rvn-pkg-ng-core';
import { Component, Input, OnInit } from '@angular/core';
import { ArrayValuesInput } from './array-values.input';

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
