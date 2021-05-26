import { Component, Input } from '@angular/core';

/**
 * All value renderers should inherit this calss which contains inputs needed for each value renderer.
 * All value renderers need a value input to display.
 */
@Component({
  selector: 'base-value-renderer',
  templateUrl: './base-value-renderer.component.html',
  styleUrls: ['./base-value-renderer.component.scss']
})
export class BaseValueRendererComponent {

  @Input() value: any;

  constructor() {
  }

}