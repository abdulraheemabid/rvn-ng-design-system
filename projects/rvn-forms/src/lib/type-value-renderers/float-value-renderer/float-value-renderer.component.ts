import { Component, OnInit } from '@angular/core';
import { BaseValueRendererComponent } from '../base-value-renderer/base-value-renderer.component';

@Component({
  selector: 'float-value-renderer',
  templateUrl: './float-value-renderer.component.html',
  styleUrls: ['./float-value-renderer.component.scss']
})
export class FloatValueRendererComponent extends BaseValueRendererComponent implements OnInit {

  ngOnInit(): void {
  }

}
