import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RvnInputInput } from '@abdulraheemabid/rvn-pkg-ng-core';
import { BaseInputRendererComponent } from '../base-input-renderer/base-input-renderer.component';

@Component({
  selector: 'int-input-renderer',
  templateUrl: './int-input-renderer.component.html',
  styleUrls: ['./int-input-renderer.component.scss']
})
export class IntInputRendererComponent extends BaseInputRendererComponent implements OnInit {

  config: RvnInputInput;

  ngOnInit(): void {

    this.config = {
      label: this.fieldDefinition.name,
      placeholder: "Enter number",
      required: this.fieldDefinition.required,
      type: 'number'
    }

    // converting string value to number
    this.valueFC.valueChanges.subscribe(v => {
      try {
        this.valueFC.setValue(Number(v), { emitEvent: false });
      } catch (err) { }
    })
  }
}
