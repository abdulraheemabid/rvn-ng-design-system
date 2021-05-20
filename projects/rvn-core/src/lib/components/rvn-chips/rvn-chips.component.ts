import { Component, Input, OnInit } from '@angular/core';
import { isNullOrUndefined } from '../../utils/funtions.util';
import { ColorType } from "../../utils/types";

export interface RvnChipsInput {
    list: {
        key: string,
        value: string,
        color?: ColorType
    }[];
}

@Component({
  selector: 'rvn-chips',
  templateUrl: './rvn-chips.component.html',
  styleUrls: ['./rvn-chips.component.scss']
})
export class RvnChipsComponent implements OnInit {

  constructor() { }

  @Input() config: RvnChipsInput;

  ngOnInit(): void {
    if (isNullOrUndefined(this.config)) this.config = { list: [] };
    if (isNullOrUndefined(this.config.list)) this.config.list = [];
  }

}
