import { Component, Input, OnInit } from '@angular/core';
export interface RvnNavListInput {
  list: RvnNavItem[];
}

export interface RvnNavItem {
  displayName: string;
  routeURL?: string;
  showDividerBelow?: boolean;
}

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
