import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';

export interface RvnCardInput {
  headerIcon?: string;
  title?: string;
  subtitle?: string;
}

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