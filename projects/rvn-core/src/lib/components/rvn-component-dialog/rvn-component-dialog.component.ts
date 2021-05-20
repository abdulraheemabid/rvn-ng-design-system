import { Component, ComponentRef, EventEmitter, Inject, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DynamicComponentService } from '../../services/dynamic-component/dynamic-component.service';
import { isNullOrUndefined } from '../../utils/funtions.util';
import { KeyValue } from "@angular/common";
import { RvnButtonInput } from '../rvn-button/rvn-button.component';

export interface RvnComponentDialogInput {
  title?: string;
  component: any;
  componentInputs?: KeyValue<string, any>[];
  showActionBtns?: boolean;
  showOnlyPrimaryButton?: boolean;
  primaryButtonMessage?: string;
  primaryButtonConfig?: RvnButtonInput;
  secondaryButtonMessage?: string;
  secondaryButtonConfig?: RvnButtonInput;
}

@Component({
  selector: 'rvn-component-dialog',
  templateUrl: './rvn-component-dialog.component.html',
  styleUrls: ['./rvn-component-dialog.component.scss']
})
export class RvnComponentDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: RvnComponentDialogInput,
    private dynamicCompoentService: DynamicComponentService
  ) { }

  config: RvnComponentDialogInput;
  @ViewChild("componentAnchorPoint", { read: ViewContainerRef }) componentAnchorPoint: ViewContainerRef;
  @Output() componentRef: EventEmitter<ComponentRef<any>> = new EventEmitter();

  ngOnInit() {
    this.config = this.data;
    if (isNullOrUndefined(this.config)) this.config = { component: null, primaryButtonMessage: "yes" };
    if (isNullOrUndefined(this.config.title)) this.config.title = "";
    if (isNullOrUndefined(this.config.showActionBtns)) this.config.showActionBtns = false;
    if (isNullOrUndefined(this.config.showOnlyPrimaryButton)) this.config.showOnlyPrimaryButton = false;
    if (isNullOrUndefined(this.config.primaryButtonMessage)) this.config.primaryButtonMessage = "Yes";
    if (isNullOrUndefined(this.config.secondaryButtonMessage)) this.config.secondaryButtonMessage = "No";
    if (isNullOrUndefined(this.config.primaryButtonConfig)) this.config.primaryButtonConfig = { type: 'tertiary' };
    if (isNullOrUndefined(this.config.secondaryButtonConfig)) this.config.secondaryButtonConfig = { type: 'tertiary', color: 'warn' };

    setTimeout(() => this.dynamicCompoentService.injectComponent(this.componentAnchorPoint, this.config.component, this.config.componentInputs)
      .subscribe(comp => this.componentRef.emit(comp)));
  }

}
