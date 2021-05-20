import { Component, OnInit } from '@angular/core';
import { BaseDefinitionRendererComponent } from '../base-definition-renderer/base-definition-renderer.component';

@Component({
  selector: 'string-definition-renderer',
  templateUrl: './string-definition-renderer.component.html',
  styleUrls: ['./string-definition-renderer.component.scss']
})
export class StringDefinitionRendererComponent extends BaseDefinitionRendererComponent implements OnInit {

  ngOnInit(): void {
  }

}
