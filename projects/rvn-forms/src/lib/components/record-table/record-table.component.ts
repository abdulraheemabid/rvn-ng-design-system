import { isNullOrUndefined, RvnTableInput } from '@abdulraheemabid/rvn-pkg-ng-core';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { IForm, IRecord } from "../../types";

export interface RecordTableInput {
  tableConfig: RvnTableInput;
  formDefinition: IForm;
  actionsTemplate?: TemplateRef<unknown>;
}

/**
 * Its a wrapper components which takes in records and form definition and display those records in a table.
 * Since this component's logic is used in multiple location, showing data using value renderes logic has been encapsulated 
 * here so it can be resued. 
 */
@Component({
  selector: 'record-table',
  templateUrl: './record-table.component.html',
  styleUrls: ['./record-table.component.scss']
})
export class RecordTableComponent implements OnInit {

  constructor() { }

  @ViewChild("cell", { static: true }) cellTemplate: TemplateRef<unknown>;
  @ViewChild("updatedOnTemplate", { static: true }) updatedOnTemplate: TemplateRef<unknown>;
  @ViewChild("expandedContent", { static: true }) expandedContentTemplate: TemplateRef<unknown>;

  @Input() config: RecordTableInput;
  @Output() rowClicked: EventEmitter<unknown> = new EventEmitter<unknown>();

  initDone: boolean = false;

  ngOnInit(): void {
    this.config.tableConfig.data = this.config?.tableConfig.data.map(record => {
      record = { ...(record as IRecord).entry, ...(record as IRecord), };
      return record;
    });

    this.config?.tableConfig.columnsToDisplay.forEach(c => c.customTemplate = this.cellTemplate);

    this.config?.tableConfig.columnsToDisplay.push({ keyName: "updatedOn", displayName: 'last updated', customTemplate: this.updatedOnTemplate });
    this.config?.tableConfig.columnsToDisplay.unshift({ keyName: "id", displayName: 'Id' });

    this.config.tableConfig.expandedRowTemplate = this.expandedContentTemplate;

    if (!isNullOrUndefined(this.config?.actionsTemplate))
      this.config?.tableConfig.columnsToDisplay.push({ keyName: "actions", displayName: "", customTemplate: this.config?.actionsTemplate, textAlign: "right" });

    this.initDone = true;
  }

  onRowClicked(row) {
    this.rowClicked.emit(row);
  }


}
