import { Component, OnInit } from '@angular/core';
import { BaseValueRendererComponent } from '../base-value-renderer/base-value-renderer.component';

@Component({
  selector: 'int-value-renderer',
  templateUrl: './int-value-renderer.component.html',
  styleUrls: ['./int-value-renderer.component.scss']
})
export class IntValueRendererComponent extends BaseValueRendererComponent implements OnInit {

  ngOnInit(): void {
  }

}
