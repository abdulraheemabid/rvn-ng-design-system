import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { isNullOrUndefined } from '../../utils/funtions.util';
import { ColorType } from "../../utils/types";

export interface RvnToolbarInput{
  styleClass?: string;
  color?: ColorType | "";
}

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
