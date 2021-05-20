import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BaseDefinitionRendererComponent } from '../base-definition-renderer/base-definition-renderer.component';

@Component({
  selector: 'multiselect-definition-renderer',
  templateUrl: './multiselect-definition-renderer.component.html',
  styleUrls: ['./multiselect-definition-renderer.component.scss']
})
export class MultiselectDefinitionRendererComponent extends BaseDefinitionRendererComponent implements OnInit {

  displayAsFC: FormControl;
  arrayValues: FormControl;

  ngOnInit(): void {
    this.displayAsFC = this.createFormControlIfNotExists("displayAs", "", [Validators.required], true);
    this.arrayValues = this.createFormControlIfNotExists("arrayValues", []);
  }

}
