import { Component, Input, OnInit } from '@angular/core';
import { isNullOrUndefined } from '../../utils/funtions.util';

export interface RvnAccordionPanelInput {
  hideToggle?: boolean;
  hasActionContent?: boolean;
  hasHeader?: boolean;
  disabled?: boolean;
  expanded?: boolean;
}

/**
 * Config defaults:
 * 1. hideToggle: false
 * 2. hasActionContent: false
 * 3. hasHeader: true
 * 4. disabled: false
 * 5. expanded: true
 * 
 * Supported ng-content selectors
 * 1. title
 * 2. description
 * 3. headerContent
 * 4. content
 * 5. actionContent
 * 
 *  @example
 * <rvn-accordion>
 *                <rvn-accordion-panel [config]="{hasActionContent: true, expanded: true}">
 *                  <span title>My Title</span>
 *                  <div content>My Content</div>
 *                  <rvn-button actionContent>Action Button</rvn-button>
 *                </rvn-accordion-panel>
 * </rvn-accordion>
 * 
 */
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