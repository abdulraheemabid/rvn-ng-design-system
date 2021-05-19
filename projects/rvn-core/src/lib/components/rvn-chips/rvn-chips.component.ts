import { Component, Input, OnInit } from '@angular/core';
import { isNullOrUndefined } from '../../utils/funtions.util';
import { RvnChipsInput } from './rvn-chips.input';

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
