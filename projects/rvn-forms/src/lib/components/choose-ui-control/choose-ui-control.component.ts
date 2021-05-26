import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { isNullOrUndefined, RvnSelectInput } from '@abdulraheemabid/rvn-pkg-ng-core';
import { UIControlNameEnum, UIControlEnum } from '../../types';
import { TypeMetaService } from '../../services/type-meta-service/type-meta.service';
import { FormControl } from "@angular/forms";
import { FieldType } from "../../types";

export interface ChooseUiControlInput {
  selectedFieldType: FieldType;
  uiFormControl: FormControl;
}

/**
 * Used to render a select component to choose how field should be displayed.
 * Ideally wouldnt need to use this component directly, it will be only used by form-definition-renderer 
 */
@Component({
  selector: 'choose-ui-control',
  templateUrl: './choose-ui-control.component.html',
  styleUrls: ['./choose-ui-control.component.scss']
})
export class ChooseUiControlComponent implements OnInit {

  constructor(private typeMetaService: TypeMetaService) { }

  @Input() config: ChooseUiControlInput;

  selectCompConfig: RvnSelectInput = { label: 'Display as', placeholder: 'Select', required: true, selectOptions: null };

  ngOnInit(): void {
    if (this.config.selectedFieldType) {
      const supportedControls: UIControlEnum[] = this.typeMetaService.getFieldTypeMetaData(this.config.selectedFieldType)?.inputRenderers.map(i => i.UIControl);

      let selectOptions: KeyValue<string, string>[] = [];
      for (let key of supportedControls) {
        selectOptions.push({
          key,
          value: UIControlNameEnum[key]
        });
      }

      this.selectCompConfig.selectOptions = selectOptions;

      if (!isNullOrUndefined(this.config.uiFormControl.value) && this.config.uiFormControl.value !== "")
        this.config.uiFormControl.setValue(selectOptions.find(o => o.key === this.config.uiFormControl.value.key), { emitEvent: false });

    }
  }
}
