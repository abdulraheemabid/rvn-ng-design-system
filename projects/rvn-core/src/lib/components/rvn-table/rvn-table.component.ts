import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Injector, Input, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { isNullOrUndefined } from '../../utils/funtions.util';

export interface RvnTableInput {
  data: any[];
  columnsToDisplay: {
    keyName: string,
    displayName?: string,
    textAlign?: "center" | "left" | "right",
    customTemplate?: TemplateRef<any>;
    backgroundClass?: string;
  }[];
  enableFilter?: boolean;
  useComponentFilter?: boolean;
  filterInputFC?: FormControl;
  stickColumnsAtStartIndexes?: number[];
  stickColumnsAtEndIndexes?: number[];
  noDataMessage?: string;
  noDataOnFilterMessage?: string;
  expandedRowTemplate?: TemplateRef<any>
  enablePagination?: boolean;
  pageOptions?: number[];
}

/**
 * Config defaults:
 * 1. data = [];
 * 2. columnsToDisplay = [];
 * 3. enableFilter = true;
 * 4. useComponentFilter = true;
 * 5. filterInputFC = `new FormControl(null)`;
 * 6. stickColumnsAtStartIndexes = [];
 * 7. stickColumnsAtEndIndexes = [];
 * 8. noDataMessage = "No data !";
 * 9. noDataOnFilterMessage = "No data matching the filter!";
 * 10. enablePagination = false;
 * 11. pageOptions = `[10, 25, 50]`;
 * 
 * Supported ng-content selectors
 * 1. none
 * 
 * Provided context for templateRef
 * 1. row
 * 2. column
 * 3. value
 * 
 * All three will be provided for: config.columnsToDisplay[i].customTemplate to render individual cell.
 * For config.expandedRowTemplate, row will be provided
 * 
 * ### Example
 ```ts
 this.tableConfig = {
    data: [{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', description: "Hydrogen is a chemical element with symbol H and atomic number 1. With a standard" }, { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', description: "Helium is a chemical element with symbol He and atomic number 2. " }, { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', description: "Lithium is a chemical element with symbol Li and atomic number 3. It is a soft" }, { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', description: "Beryllium is a chemical element with symbol Be and atomic number 4. " }, { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', description: "Boron is a chemical element with symbol B and atomic number 5. Produced entire" }, { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', description: "Carbon is a chemical element with symbol C and atomic number 6. It is nonmeta" }, { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', description: "Nitrogen is a chemical element with symbol N and atomic number 7. I" }, { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', description: "Oxygen is a chemical element with symbol O and atomic number 8. It is a me" }, { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', description: "Fluorine is a chemical element with symbol F and atomic number 9. It i" }, { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a n" },],
    columnsToDisplay: [{ keyName: 'name' }, { keyName: 'weight' }, { keyName: 'symbol' }, { keyName: 'position' }, { keyName: 'action', customTemplate: this.actions, textAlign: 'right' }],
    enableFilter: true,
    stickColumnsAtStartIndexes: [],
    stickColumnsAtEndIndexes: [],
    noDataMessage: "No data found. and this is a custom message",
    noDataOnFilterMessage: "No data found matching filter. and this is a custom message",
    expandedRowTemplate: this.onRowExpand,
    enablePagination: true,
    pageOptions: [5, 10, 100]
  }
 ```
 ```html
 <rvn-table [config]="tableConfig">
    <ng-template #onRowExpand let-row="row">
        <div class="example-element-diagram">
            <div class="example-element-position"> {{row.position}} </div>
            <div class="example-element-symbol"> {{row.symbol}} </div>
            <div class="example-element-name"> {{row.name}} </div>
            <div class="example-element-weight"> {{row.weight}} </div>
        </div>
    </ng-template>

    <ng-template #actions let-row="row">
        <rvn-button (onClick)="onClick(row)" [config]="{'icon': 'edit',  type: 'icon'}"></rvn-button>
    </ng-template>
</rvn-table>
 ```
 */
@Component({
  selector: 'rvn-table',
  templateUrl: './rvn-table.component.html',
  styleUrls: ['./rvn-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class RvnTableComponent implements OnInit {

  constructor(private inj: Injector) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild("columValueComponentAnchor", { read: ViewContainerRef }) columValueComponentAnchor: ViewContainerRef;
  @ViewChild("expandedComponentAnchor", { read: ViewContainerRef }) expandedComponentAnchor: ViewContainerRef;
  @Input() config: RvnTableInput;
  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();
  hasExpandedContent: boolean = false;

  dataSource;
  expandedRow;
  initDone: boolean = false;
  columnsToDisplayNames: string[];

  ngOnInit(): void {

    this.handleConfigSetup();

    if (this.config.enableFilter)
      this.config.filterInputFC.valueChanges.subscribe(value => this.applyFilter(value));

    this.dataSource = new MatTableDataSource(this.config.data);
    this.initDone = true;

  }

  handleConfigSetup() {
    if (isNullOrUndefined(this.config)) this.config = { columnsToDisplay: [], data: [] }
    if (isNullOrUndefined(this.config.data)) this.config.data = [];
    if (isNullOrUndefined(this.config.columnsToDisplay)) this.config.columnsToDisplay = [];
    if (isNullOrUndefined(this.config.enableFilter)) this.config.enableFilter = true;
    if (isNullOrUndefined(this.config.useComponentFilter)) this.config.useComponentFilter = true;
    if (isNullOrUndefined(this.config.filterInputFC)) this.config.filterInputFC = new FormControl(null);
    if (isNullOrUndefined(this.config.stickColumnsAtStartIndexes)) this.config.stickColumnsAtStartIndexes = [];
    if (isNullOrUndefined(this.config.stickColumnsAtEndIndexes)) this.config.stickColumnsAtEndIndexes = [];
    if (isNullOrUndefined(this.config.noDataMessage)) this.config.noDataMessage = "No data !";
    if (isNullOrUndefined(this.config.noDataOnFilterMessage)) this.config.noDataOnFilterMessage = "No data matching the filter!";
    if (isNullOrUndefined(this.config.enablePagination)) this.config.enablePagination = false;
    if (isNullOrUndefined(this.config.pageOptions)) this.config.pageOptions = [10, 25, 50];

    this.columnsToDisplayNames = this.config.columnsToDisplay.map(c => c.keyName);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getColumDisplayName(keyName: string) {
    const displayName = this.config.columnsToDisplay.find(c => c.keyName === keyName).displayName;
    return !isNullOrUndefined(displayName) ? displayName : keyName;
  }

  getJustifyContentClassByTextAlign(indexOfColumnsToDisplay: number) {
    switch (this.config.columnsToDisplay[indexOfColumnsToDisplay].textAlign) {
      case "center":
        return "col-flex-center";
      case "left":
        return "col-flex-start";
      case "right":
        return "col-flex-end";
      default:
        return "";
    }
  }

  rowClick(row) {
    if (this.config.expandedRowTemplate) {
      this.expandedRow = this.expandedRow === row ? null : row;
      if (this.expandedRow) this.rowClicked.emit(this.expandedRow);
    }
  }
}