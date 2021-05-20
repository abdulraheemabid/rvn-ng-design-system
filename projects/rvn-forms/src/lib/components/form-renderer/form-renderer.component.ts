import { Component, OnChanges, Input, ViewChildren, ViewContainerRef, QueryList, SimpleChanges, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { isNullOrUndefined, RvnSnackBarService } from '@abdulraheemabid/rvn-pkg-ng-core';
import { ReactiveFormUtilityService } from "../../services/reactive-form-utility/reactive-form-utility.service";
import { IFormField } from "../../types";
import { FormService } from "../../services/form/form.service";
import { Subject } from "rxjs";
import { CreateOrEdit } from '@abdulraheemabid/rvn-pkg-ng-core';
import { IForm, IRecord } from "../../types";
import { RecordParentInputRendererInput } from "../../type-input-renderers/record-parent-input-renderer/record-parent-input-renderer.component";

export interface FormRendererInput {
  formDefinition: IForm;
  mode?: CreateOrEdit | "preview";
  record?: IRecord;
  parentRecords?: IRecord[];
  parentForm?: IForm;
  markFGAsDirtySubject$?: Subject<any>;
  preSelectedParentRecordId?: number;
}

@Component({
  selector: 'form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.scss']
})
export class FormRendererComponent implements OnChanges {

  constructor(private formService: FormService,
    private snackBarService: RvnSnackBarService,
    private utilityService: ReactiveFormUtilityService) { }

  @Input() config: FormRendererInput;
  @Output() recordUpdate: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @ViewChildren("fieldAnchorPoint", { read: ViewContainerRef }) fieldAnchorPoints: QueryList<ViewContainerRef>;

  recordFG: FormGroup;
  // for preview mode, the id for each fc will be the name of each field as we dont have the id yet.
  keyToUseForFieldControl: "name" | "id" = "id";
  isChildForm: boolean;
  parentRendererConfig: RecordParentInputRendererInput;

  get parentFC(): FormControl {
    return this.recordFG.get('attributes').get('parent').get('recordId') as FormControl;
  }

  ngOnChanges(changes: SimpleChanges): void {

    if(isNullOrUndefined(this.config.mode)) this.config.mode = "preview";

    this.setPramsAccordingToMode();
    this.sortFieldsByPosition();
    this.generateRecordFormGroup();
    this.handleMarkingAsDirty();
    if (!isNullOrUndefined(this.config.preSelectedParentRecordId)) this.parentFC.setValue(parseInt(this.config.preSelectedParentRecordId.toString()), { emitEvent: false })
    this.parentRendererConfig = { showDummy: this.config.mode === "preview", parentRecords: this.config.parentRecords, parentForm: this.config.parentForm, valueFC: this.parentFC };
    this.checkIfChildForm();

    this.recordFG.valueChanges.subscribe(value => this.recordUpdate.emit(this.recordFG));

    if (isNullOrUndefined(this.config.parentRecords)) this.config.parentRecords = [];

    // TODO: need settimeout so that ngFor is done initializing. Cant find appropriate hook
    setTimeout(() => { this.renderControlForEachField() });
  }

  setPramsAccordingToMode() {
    if (this.config.mode === "preview") {
      this.keyToUseForFieldControl = "name";
    };
  }

  sortFieldsByPosition() {
    this.config.formDefinition.fields = this.config.formDefinition.fields.sort((a, b) => a.attributes.position - b.attributes.position);
  }

  generateRecordFormGroup() {
    this.recordFG = (this.config.mode === "edit" && this.config.record) ?
      this.formService.getRecordFG(this.config.formDefinition, this.config.record) :
      this.formService.getNewRecordFG(this.config.formDefinition, this.keyToUseForFieldControl);

    this.recordUpdate.emit(this.recordFG);
  }

  checkIfChildForm() {
    this.isChildForm = !isNullOrUndefined(this.config.formDefinition?.attributes?.parentForm?.formId);
  }

  renderControlForEachField() {
    this.config.formDefinition.fields.forEach(f => {
      if (f.markDeleted !== true) this.renderUIControl(f)
    })
  }

  renderUIControl(field: IFormField) {
    if (!isNullOrUndefined(field?.type) && !isNullOrUndefined(field.attributes?.position)) {
      const ref = this.fieldAnchorPoints.get(field.attributes.position);
      const fcName = field[this.keyToUseForFieldControl.toString()].toString();
      this.formService.injectTypeInputRenderer(field, ref, this.recordFG.get("entry").get(fcName) as FormControl).subscribe(() => { }, err => { });
    }
  }

  handleMarkingAsDirty() {
    if (this.config.markFGAsDirtySubject$)
      this.config.markFGAsDirtySubject$.subscribe(_ => {
        this.utilityService.markNestedFormGroupDirty(this.recordFG);
      });
  }

  submit() {
    if (this.config.mode === "preview") {
      this.utilityService.markNestedFormGroupDirty(this.recordFG);

      if (this.recordFG.status !== "VALID")
        this.snackBarService.showErrorAlert("All entered values are not valid. Please recheck");


      if (this.recordFG.status === "VALID")
        this.snackBarService.showSuccessAlert("Form is valid. This record will be posted to server");
    }
  }
}
