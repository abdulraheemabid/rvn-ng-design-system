import { Component, Input, OnInit } from '@angular/core';
import { isNullOrUndefined } from '../../utils/funtions.util';
import { RvnAccordionInput } from './rvn-accordion.input';

@Component({
  selector: 'rvn-accordion',
  templateUrl: './rvn-accordion.component.html',
  styleUrls: ['./rvn-accordion.component.scss']
})
export class RvnAccordionComponent implements OnInit {

  constructor() { }

  @Input() config: RvnAccordionInput;

  ngOnInit(): void {
    if (isNullOrUndefined(this.config)) this.config = {};
    if (isNullOrUndefined(this.config?.multi)) this.config.multi = true;
  }
}
