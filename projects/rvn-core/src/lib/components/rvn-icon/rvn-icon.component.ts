import { Component, Input, OnInit } from '@angular/core';
export interface RvnIconInput {
  name: string;
}

/**
 * Config defaults:
 * 1. none
 * 
 * Supported ng-content selectors
 * 1. none
 * 
 * @example
 * <rvn-icon [config]="{name: 'home'}"></rvn-icon>
 * 
 */
@Component({
  selector: 'rvn-icon',
  templateUrl: './rvn-icon.component.html',
  styleUrls: ['./rvn-icon.component.scss']
})
export class RvnIconComponent implements OnInit {

  constructor() { }

  @Input() config: RvnIconInput;

  ngOnInit(): void {
  }

}
