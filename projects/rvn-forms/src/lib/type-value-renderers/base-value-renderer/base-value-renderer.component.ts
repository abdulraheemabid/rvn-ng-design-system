import { Component, Inject, Input, OnInit } from '@angular/core';
import { FieldType } from '../../types';

@Component({
  selector: 'base-value-renderer',
  templateUrl: './base-value-renderer.component.html',
  styleUrls: ['./base-value-renderer.component.scss']
})
export class BaseValueRendererComponent {

  @Input() type: FieldType;
  @Input() value: any;

  constructor() {
  }

}