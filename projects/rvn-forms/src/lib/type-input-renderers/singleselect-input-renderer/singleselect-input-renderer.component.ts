import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UIControlEnum } from '../../types';
import { BaseInputRendererComponent } from '../base-input-renderer/base-input-renderer.component';

@Component({
  selector: 'singleselect-input-renderer',
  templateUrl: './singleselect-input-renderer.component.html',
  styleUrls: ['./singleselect-input-renderer.component.scss']
})
export class SingleselectInputRendererComponent extends BaseInputRendererComponent implements OnInit {

  config: any;

  ngOnInit(): void {

    this.config = {
      label: this.fieldDefinition.name,
      required: this.fieldDefinition.required
    }

    switch (this.UIControl) {
      case UIControlEnum.SELECT:
        this.config.placeholder = "Pick an option";
        this.config.selectOptions = this.fieldDefinition.arrayValues;
        break;
      case UIControlEnum.RADIO:
        this.config.radioOptions = this.fieldDefinition.arrayValues;
        break;
    }

  }

}
