import { Component, OnInit } from '@angular/core';
import { BaseDefinitionRendererComponent } from '../base-definition-renderer/base-definition-renderer.component';

@Component({
  selector: 'float-definition-renderer',
  templateUrl: './float-definition-renderer.component.html',
  styleUrls: ['./float-definition-renderer.component.scss']
})
export class FloatDefinitionRendererComponent extends BaseDefinitionRendererComponent implements OnInit {

  ngOnInit(): void {
  }

}
