import { Component, Input, OnInit } from '@angular/core';
export interface RvnNavListInput {
  list: RvnNavItem[];
}

export interface RvnNavItem {
  displayName: string;
  routeURL?: string;
  showDividerBelow?: boolean;
}

/**
 * Config defaults:
 * 1. none
 * 
 * Supported ng-content selectors
 * 1. none
 * 
 * @example
 * <rvn-nav-list [config]="{list: sideBarLinks}"></rvn-nav-list>
 * 
 */
@Component({
  selector: 'rvn-nav-list',
  templateUrl: './rvn-nav-list.component.html',
  styleUrls: ['./rvn-nav-list.component.scss']
})
export class RvnNavListComponent implements OnInit {

  constructor() { }

  @Input() config: RvnNavListInput;

  ngOnInit(): void {
  }

}
