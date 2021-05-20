import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { isNullOrUndefined, RvnSelectInput } from '@abdulraheemabid/rvn-pkg-ng-core';
import { UIControlNameEnum, UIControlEnum } from '../../types';
import { ChooseUiControlInput } from './choose-ui-control.input';
import { TypeMetaService } from '../../services/type-meta-service/type-meta.service';

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
