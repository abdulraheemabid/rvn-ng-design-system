import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { isNullOrUndefined } from '@abdulraheemabid/rvn-pkg-ng-core';
import { RecordTableInput } from './record-table.input';

@Component({
  selector: 'record-table',
  templateUrl: './record-table.component.html',
  styleUrls: ['./record-table.component.scss']
})
export class RecordTableComponent implements OnInit {

  constructor() { }

  @ViewChild("cell", { static: true }) cellTemplate: TemplateRef<any>;
  @ViewChild("updatedOnTemplate", { static: true }) updatedOnTemplate: TemplateRef<any>;
  @ViewChild("expandedContent", { static: true }) expandedContentTemplate: TemplateRef<any>;

  @Input() config: RecordTableInput;
  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();

  initDone: boolean = false;

  ngOnInit(): void {
    this.config.tableConfig.data = this.config?.tableConfig.data.map(record => {
      record = { ...record.entry, ...record, };
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
