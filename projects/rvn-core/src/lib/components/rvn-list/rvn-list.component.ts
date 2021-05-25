import { Component, Input, OnInit } from '@angular/core';
import { isNullOrUndefined } from '../../utils/funtions.util';
import { TemplateRef } from "@angular/core";

export interface RvnListInput {
  list: any[];
  lineOneKey: string;
  lineTwoKey?: string;
  icon?: string;
  actionTemplateRef?: TemplateRef<any>;
  dense?: boolean;
}

/** 
 * Config defaults:
 * 1. list: `[]`
 * 2. lineOneKey: ''
 * 3. dense: false
 * 
 * Supported ng-content selectors
 * 1. none
 * 
 * Provided context for templateRef
 * 1. listItem
 * 
 * @example 
 * <rvn-list [config]="{list: [{name: 'Products', desc: 'des item 1'},{name: 'item 2', desc: 'des item 2'}], lineOneKey: 'name', lineTwoKey: 'desc', icon: 'assignment', actionTemplateRef: actions}"></rvn-list>
 * <ng-template #actions let-listItem="listItem">
 *                <rvn-button (onClick)="onClick(listItem)" [config]="{'icon': 'edit',  type: 'icon'}"></rvn-button>
 * </ng-template>
 */
@Component({
  selector: 'rvn-list',
  templateUrl: './rvn-list.component.html',
  styleUrls: ['./rvn-list.component.scss']
})
export class RvnListComponent implements OnInit {

  constructor() { }

  @Input() config: RvnListInput;

  ngOnInit(): void {
    if (isNullOrUndefined(this.config)) this.config = { list: [], lineOneKey: "" };
    if (isNullOrUndefined(this.config.list)) this.config.list = [];
    if (isNullOrUndefined(this.config.lineOneKey)) this.config.lineOneKey = "";
    if (isNullOrUndefined(this.config.dense)) this.config.dense = false;
  }
}
