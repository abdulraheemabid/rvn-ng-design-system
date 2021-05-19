import { Component, Input, OnInit } from '@angular/core';
import { isNullOrUndefined } from '../../utils/funtions.util';
import { RvnAccordionPanelInput } from './rvn-accordion-panel.input';

@Component({
  selector: 'rvn-accordion-panel',
  templateUrl: './rvn-accordion-panel.component.html',
  styleUrls: ['./rvn-accordion-panel.component.scss'],
})
export class RvnAccordionPanelComponent implements OnInit {

  constructor() { }

  @Input() config: RvnAccordionPanelInput;

  ngOnInit(): void {
    if (isNullOrUndefined(this.config)) this.config = {};
    if (isNullOrUndefined(this.config?.hideToggle)) this.config.hideToggle = false;
    if (isNullOrUndefined(this.config?.hasActionContent)) this.config.hasActionContent = false;
    if (isNullOrUndefined(this.config?.hasHeader)) this.config.hasHeader = true;
    if (isNullOrUndefined(this.config?.disabled)) this.config.disabled = false;
    if (isNullOrUndefined(this.config?.expanded)) this.config.expanded = true;
  }

}
