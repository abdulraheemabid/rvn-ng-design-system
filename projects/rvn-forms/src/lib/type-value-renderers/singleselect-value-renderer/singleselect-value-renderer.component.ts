import { Component, OnInit } from '@angular/core';
import { BaseValueRendererComponent } from '../base-value-renderer/base-value-renderer.component';

@Component({
  selector: 'singleselect-value-renderer',
  templateUrl: './singleselect-value-renderer.component.html',
  styleUrls: ['./singleselect-value-renderer.component.scss']
})
export class SingleselectValueRendererComponent extends BaseValueRendererComponent implements OnInit {

  ngOnInit(): void {
  }

}
