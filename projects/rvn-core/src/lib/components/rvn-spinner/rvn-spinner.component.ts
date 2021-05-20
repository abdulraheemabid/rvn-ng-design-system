import { Component, Input, OnInit } from '@angular/core';
import { isNullOrUndefined } from '../../utils/funtions.util';
import { ColorType } from "../../utils/types";

export interface RvnSpinnerInput {
   fullHeight?: boolean;
   color?: ColorType;
}

@Component({
  selector: 'rvn-spinner',
  templateUrl: './rvn-spinner.component.html',
  styleUrls: ['./rvn-spinner.component.scss']
})
export class RvnSpinnerComponent implements OnInit {

  constructor() { }

  @Input() config: RvnSpinnerInput;

  ngOnInit(): void {
    if (isNullOrUndefined(this.config)) this.config = {};
    if (isNullOrUndefined(this.config.fullHeight)) this.config.fullHeight = false;
    if (isNullOrUndefined(this.config.color)) this.config.color = "primary";
  }

}
