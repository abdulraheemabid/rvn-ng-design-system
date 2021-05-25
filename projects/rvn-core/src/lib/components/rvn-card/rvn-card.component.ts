import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';

export interface RvnCardInput {
  headerIcon?: string;
  title?: string;
  subtitle?: string;
}

/**
 * Config defaults:
 * 1. none
 * 
 * Supported ng-content selectors
 * 1. headerAction
 * 2. content
 * 3. footer
 * 
 * @example
 * <rvn-card [config]="{'headerIcon': 'border_all', 'title': 'My Title', 'subtitle': 'Something long subtitle'}">
 *                <rvn-button headerAction (onClick)="onClick()">Btn</rvn-button>
 *                <div content> My content</div>
 *                <div footer> Footer</div>
 * </rvn-card>
 * 
 */
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