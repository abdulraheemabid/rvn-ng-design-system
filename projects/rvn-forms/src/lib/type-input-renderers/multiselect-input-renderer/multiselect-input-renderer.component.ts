import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UIControlEnum } from '../../types';
import { BaseInputRendererComponent } from '../base-input-renderer/base-input-renderer.component';

@Component({
  selector: 'multiselect-input-renderer',
  templateUrl: './multiselect-input-renderer.component.html',
  styleUrls: ['./multiselect-input-renderer.component.scss']
})
export class MultiselectInputRendererComponent extends BaseInputRendererComponent implements OnInit {

  //fg: FormGroup;
  config: any;

  ngOnInit(): void {

    this.config = {
      label: this.fieldDefinition.name,
      required: this.fieldDefinition.required
    }

    switch (this.UIControl) {
      case UIControlEnum.CHECKBOX:

        this.config.checkboxOptions = this.fieldDefinition.arrayValues;

        // //checkbox needs formGroup instead of FC  
        // this.fg = this.fb.group({});
        // this.fg.valueChanges.subscribe(v => {
        //   this.valueFC.setValue(this.fg.get("checkboxArray").value);
        // })

        break;
      case UIControlEnum.CHIPSINPUT:
        this.config.placeholder = "Pick values from list";
        this.config.autoCompleteOption = this.fieldDefinition.arrayValues;
        break;
    }

  }

}
