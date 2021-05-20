import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormService } from '../../services/form/form.service';
import { IForm } from "../../types";

export interface RecordCellViewInput {
  fieldId: string;
  value: any;
  form: IForm;
}

@Component({
  selector: 'record-cell-view',
  templateUrl: './record-cell-view.component.html',
  styleUrls: ['./record-cell-view.component.scss']
})
export class RecordCellViewComponent implements OnInit {

  constructor(private formService: FormService) { }

  @Input() config: RecordCellViewInput;
  @ViewChild("anchor", { read: ViewContainerRef }) anchor: ViewContainerRef;

  ngOnInit(): void {
    setTimeout(() => {
      const fieldType = this.config?.form.fields.find(f => f.id.toString() === this.config?.fieldId).type.key;
      this.formService.injectTypeValueRenderer(fieldType, this.anchor, this.config?.value).subscribe();
    })
  }

}
