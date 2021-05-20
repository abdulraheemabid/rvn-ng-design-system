import { Component, Input, OnInit } from '@angular/core';
export interface RvnIconInput {
  name: string;
}

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
