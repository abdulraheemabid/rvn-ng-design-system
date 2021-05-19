import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Injector, Input, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from '../../utils/funtions.util';
import { RvnTableInput } from './rvn-table.input';

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