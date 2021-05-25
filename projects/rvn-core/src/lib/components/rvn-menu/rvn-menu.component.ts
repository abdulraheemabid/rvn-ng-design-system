import { Component, OnInit } from '@angular/core';

/**
 * Config defaults:
 * 1. none
 * 
 * Supported ng-content selectors
 * 1. button
 * 2. content
 * 
 * @example
 * <rvn-menu>
 *                <rvn-button button>Button</rvn-button>
 *                <div content><ol><li>Item 1</li><li>Item 2</li></ol></div>
 * </rvn-menu>
 * 
 */
@Component({
  selector: 'rvn-menu',
  templateUrl: './rvn-menu.component.html',
  styleUrls: ['./rvn-menu.component.scss']
})
export class RvnMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
