import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { RvnCardInput } from './rvn-card.input';

@Component({
  selector: 'rvn-card',
  templateUrl: './rvn-card.component.html',
  styleUrls: ['./rvn-card.component.scss']
})
export class RvnCardComponent implements AfterViewInit {

  @Input() config: RvnCardInput;
  @ViewChild("title") title;
  showHeaderDivider: boolean = false;

  ngAfterViewInit(): void {
    setTimeout(() => this.showHeaderDivider = this.title != null);
  }

}
