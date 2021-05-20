import { Component, OnInit } from '@angular/core';
import { BaseValueRendererComponent } from '../base-value-renderer/base-value-renderer.component';

@Component({
  selector: 'string-value-renderer',
  templateUrl: './string-value-renderer.component.html',
  styleUrls: ['./string-value-renderer.component.scss']
})
export class StringValueRendererComponent extends BaseValueRendererComponent implements OnInit {

  ngOnInit(): void {
  }

}
