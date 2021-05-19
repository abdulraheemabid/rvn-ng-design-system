import { Component, Input, OnInit } from '@angular/core';
import { RvnIconInput } from './rvn-icon.input';

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
