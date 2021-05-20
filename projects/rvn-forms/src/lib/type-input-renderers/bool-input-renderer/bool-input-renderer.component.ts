import { Component, OnInit } from '@angular/core';
import { UIControlEnum } from '../../types';
import { BaseInputRendererComponent } from '../base-input-renderer/base-input-renderer.component';

@Component({
  selector: 'bool-input-renderer',
  templateUrl: './bool-input-renderer.component.html',
  styleUrls: ['./bool-input-renderer.component.scss']
})
export class BoolInputRendererComponent extends BaseInputRendererComponent implements OnInit {

  config: any;

  ngOnInit(): void {

    this.config = {
      label: this.fieldDefinition.name,
      placeholder: "Enter number",
      required: this.fieldDefinition.required
    }

    switch (this.UIControl) {
      case UIControlEnum.RADIO:
        this.config.radioOptions = [
          { key: true, value: "true" },
          { key: false, value: "false" },
        ]
        break;
      case UIControlEnum.SELECT:
        this.config.selectOptions = [
          { key: true, value: "true" },
          { key: false, value: "false" },
        ]
        break;
    }
  }
}
