import { Component, OnInit } from '@angular/core';
import { BaseDefinitionRendererComponent } from '../base-definition-renderer/base-definition-renderer.component';

@Component({
  selector: 'int-definition-renderer',
  templateUrl: './int-definition-renderer.component.html',
  styleUrls: ['./int-definition-renderer.component.scss']
})
export class IntDefinitionRendererComponent extends BaseDefinitionRendererComponent implements OnInit {

  ngOnInit(): void {
  }

}
