import { Component, Input, OnInit } from '@angular/core';
import { isNullOrUndefined } from '../../utils/funtions.util';
import { RvnDividerInput } from './rvn-divider.input';

@Component({
  selector: 'rvn-divider',
  templateUrl: './rvn-divider.component.html',
  styleUrls: ['./rvn-divider.component.scss']
})
export class RvnDividerComponent implements OnInit {

  @Input() config: RvnDividerInput;
  customWidthProvided: boolean = false;

  ngOnInit(): void {
    if (isNullOrUndefined(this.config)) this.config = {};
    if (isNullOrUndefined(this.config?.inset)) this.config.inset = false;
    if (isNullOrUndefined(this.config?.vertical)) this.config.vertical = false;
    if (!isNullOrUndefined(this.config?.width)) this.customWidthProvided = true;
    if (isNullOrUndefined(this.config?.width)) this.config.width = "100%";


  }

}
