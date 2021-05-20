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
