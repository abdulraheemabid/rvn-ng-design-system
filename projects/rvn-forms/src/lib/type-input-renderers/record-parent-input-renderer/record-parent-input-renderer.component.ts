import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { isNullOrUndefined, RvnButtonInput, RvnDialogService, RvnTableInput } from '@abdulraheemabid/rvn-pkg-ng-core';
import { FormService } from '../../services/form/form.service';
import { FormControl } from "@angular/forms";
import { IForm, IRecord } from "../../types";

export interface RecordParentInputRendererInput {
  valueFC: FormControl;
  parentForm: IForm;
  parentRecords: IRecord[];
  showDummy: boolean;
  disableButton?: boolean;
}

@Component({
  selector: 'record-parent-input-renderer',
  templateUrl: './record-parent-input-renderer.component.html',
  styleUrls: ['./record-parent-input-renderer.component.scss']
})
export class RecordParentInputRendererComponent implements OnInit {

  @Input() config: RecordParentInputRendererInput;
  @Output() parentSelected: EventEmitter<number> = new EventEmitter<number>();

  mode: "view" | "select" = "view";
  tableConfig: RvnTableInput = { data: [], columnsToDisplay: [], useComponentFilter: false, noDataMessage: "No records found !", noDataOnFilterMessage: "No records founds matching the search criteria" }
  buttonConfig: RvnButtonInput = { type: 'icon-text-primary', icon: 'add', color: 'primary' };
  initDone: boolean = false;
  selectedParent: IRecord;
  parentFieldName: string;
  numberOfColumnsToAddInTable = 5;

  constructor(private dialogService: RvnDialogService, private formService: FormService) { }

  ngOnInit(): void {
    if (this.config?.showDummy) {
      const dummyData = this.formService.getDummyFormAndRecords();
      this.config.parentForm = dummyData.form;
      this.config.parentRecords = dummyData.records;
    }

    this.parentFieldName = this.formService.getSingularFormName(this.config.parentForm);

    if (this.mode === "select")
      this.setTableConfig();

  }

  setTableConfig() {
    this.tableConfig.data = this.config.parentRecords;
    this.tableConfig.columnsToDisplay = this.config.parentForm.fields.map(f => {
      return {
        keyName: f.id.toString(),
        displayName: f.name,
      }
    });

    if (this.tableConfig.columnsToDisplay.length > this.numberOfColumnsToAddInTable)
      this.tableConfig.columnsToDisplay = this.tableConfig.columnsToDisplay.slice(0, this.numberOfColumnsToAddInTable);

    this.tableConfig.enableFilter = true;
    this.tableConfig.useComponentFilter = true;

    this.initDone = true;
  }

  openSelectParentDialog() {

    if (isNullOrUndefined(this.config.parentForm) || isNullOrUndefined(this.config.parentRecords))
      this.ngOnInit();

    let dialogRefOutput = this.dialogService.openComponentDialog({
      title: `Select parent record from ${this.config.parentForm.name}`,
      component: RecordParentInputRendererComponent,
      showActionBtns: true,
      primaryButtonMessage: "Choose",
      secondaryButtonMessage: "Cancel",
      componentInputs: [
        { key: 'mode', value: 'select' },
        {
          key: "config", value: {
            parentForm: this.config.parentForm,
            parentRecords: this.config.parentRecords,
            valueFC: this.config.valueFC
          }
        }
      ]
    });

    dialogRefOutput.componentRef.subscribe(compRef => {
      compRef.instance.parentSelected.subscribe((value: IRecord) => {
        this.selectedParent = value;
      });
    })

    dialogRefOutput.dialogRef.afterClosed().subscribe(confirm => {
      if (confirm) this.config.valueFC.setValue(this.selectedParent.id);
    });
  }

  onRowSelect(row) {
    this.parentSelected.emit(row);
  }

}

