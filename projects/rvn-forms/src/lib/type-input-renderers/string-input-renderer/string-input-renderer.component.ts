import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RvnInputInput } from '@abdulraheemabid/rvn-pkg-ng-core';
import { BaseInputRendererComponent } from '../base-input-renderer/base-input-renderer.component';

@Component({
  selector: 'string-input-renderer',
  templateUrl: './string-input-renderer.component.html',
  styleUrls: ['./string-input-renderer.component.scss']
})
export class StringInputRendererComponent extends BaseInputRendererComponent {

  config: RvnInputInput;

  ngOnInit(): void {    
    this.config = {
      label: this.fieldDefinition.name,
      placeholder: "Enter text value",
      required:  this.fieldDefinition.required,
      type: 'text'
    }
  }

}
