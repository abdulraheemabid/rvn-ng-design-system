import { Component, OnInit } from '@angular/core';
import { BaseValueRendererComponent } from '../base-value-renderer/base-value-renderer.component';

@Component({
  selector: 'date-value-renderer',
  templateUrl: './date-value-renderer.component.html',
  styleUrls: ['./date-value-renderer.component.scss']
})
export class DateValueRendererComponent extends BaseValueRendererComponent implements OnInit {

  ngOnInit(): void {
  }

}
