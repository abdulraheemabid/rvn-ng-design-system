import { Component, Input, OnInit } from '@angular/core';
import { isNullOrUndefined } from '../../utils/funtions.util';

export interface RvnAccordionInput {
  multi?: boolean;
}

/**
 * Config defaults:
 * 1. multi: true. 
 * 
 * Supported ng-content selectors
 * 1. Any content placed inside the tags will be rendered. rvn-accordion-panel should be used inside.
 * @example
 * <rvn-accordion>
 *                <rvn-accordion-panel [config]="{hasActionContent: true, expanded: true}">
 *                  <span title>My Title</span>
 *                  <div content>My Content</div>
 *                  <rvn-button actionContent>Action Button</rvn-button>
 *                </rvn-accordion-panel>
 * </rvn-accordion>
 */
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