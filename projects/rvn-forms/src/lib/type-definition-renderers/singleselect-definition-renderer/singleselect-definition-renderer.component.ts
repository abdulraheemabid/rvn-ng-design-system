import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BaseDefinitionRendererComponent } from '../base-definition-renderer/base-definition-renderer.component';

@Component({
  selector: 'singleselect-definition-renderer',
  templateUrl: './singleselect-definition-renderer.component.html',
  styleUrls: ['./singleselect-definition-renderer.component.scss']
})
export class SingleselectDefinitionRendererComponent extends BaseDefinitionRendererComponent implements OnInit {

  displayAsFC: FormControl;
  arrayValues: FormControl;

  ngOnInit(): void {
    this.displayAsFC = this.createFormControlIfNotExists("displayAs", "", [Validators.required], true);
    this.arrayValues = this.createFormControlIfNotExists("arrayValues", [], [Validators.required]);
  }

}
