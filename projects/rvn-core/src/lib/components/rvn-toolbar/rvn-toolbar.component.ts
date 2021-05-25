import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { isNullOrUndefined } from '../../utils/funtions.util';
import { ColorType } from "../../utils/types";

export interface RvnToolbarInput{
  styleClass?: string;
  color?: ColorType | "";
}

/**
 * Config defaults:
 * 1. styleClass: ''
 * 2. color: ''
 * 
 * Supported ng-content selectors
 * 1. content
 * 
 * @example
 * <rvn-toolbar><h1 content> Project Raven</h1></rvn-toolbar>
 * 
 */
@Component({
  selector: 'rvn-toolbar',
  templateUrl: './rvn-toolbar.component.html',
  styleUrls: ['./rvn-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RvnToolbarComponent implements OnInit {

  constructor() { }

  @Input() config: RvnToolbarInput = {};

  ngOnInit(): void {
    if (isNullOrUndefined(this.config.styleClass)) this.config.styleClass = "";
    if (isNullOrUndefined(this.config.color)) this.config.color = "";
  }

}
