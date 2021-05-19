import { Component, Input, OnInit } from '@angular/core';
import { RvnNavListInput } from './rvn-nav-list.input';

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
