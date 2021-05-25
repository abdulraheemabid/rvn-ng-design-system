import { Component, Input, OnInit } from '@angular/core';
import { isNullOrUndefined } from '../../utils/funtions.util';
export interface RvnDividerInput {
  vertical?: boolean;
  inset?: boolean;
  width?: string;
}

/** 
 * Config defaults:
 * 1. inset: false
 * 2. vertical: false
 * 3. width: '100%'
 * 
 * Supported ng-content selectors
 * 1. none
 * 
 * @example
 * <rvn-divider></rvn-divider>
 * 
 */
@Component({
  selector: 'rvn-divider',
  templateUrl: './rvn-divider.component.html',
  styleUrls: ['./rvn-divider.component.scss']
})
export class RvnDividerComponent implements OnInit {

  @Input() config: RvnDividerInput;
  customWidthProvided: boolean = false;

  ngOnInit(): void {
    if (isNullOrUndefined(this.config)) this.config = {};
    if (isNullOrUndefined(this.config?.inset)) this.config.inset = false;
    if (isNullOrUndefined(this.config?.vertical)) this.config.vertical = false;
    if (!isNullOrUndefined(this.config?.width)) this.customWidthProvided = true;
    if (isNullOrUndefined(this.config?.width)) this.config.width = "100%";


  }

}
