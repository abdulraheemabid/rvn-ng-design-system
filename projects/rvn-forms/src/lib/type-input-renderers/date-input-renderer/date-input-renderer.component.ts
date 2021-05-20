import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UIControlEnum } from '../../types';
import { BaseInputRendererComponent } from '../base-input-renderer/base-input-renderer.component';

@Component({
  selector: 'date-input-renderer',
  templateUrl: './date-input-renderer.component.html',
  styleUrls: ['./date-input-renderer.component.scss']
})
export class DateInputRendererComponent extends BaseInputRendererComponent implements OnInit {

  config: any;

  ngOnInit(): void {

    this.config = {
      label: this.fieldDefinition.name,
      required: this.fieldDefinition.required
    }

    switch (this.UIControl) {
      case UIControlEnum.INPUT:
        this.config.placeholder = "Enter a date"
        break;
      case UIControlEnum.DATEPICKER:
        this.config.placeholder = "Pick a date"
        break;
    }

  }
}
