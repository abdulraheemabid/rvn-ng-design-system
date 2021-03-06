import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { CreateOrEdit, RvnInputInput, RvnSelectInput, RvnButtonInput, isNullOrUndefined } from '@abdulraheemabid/rvn-pkg-ng-core';
import { IForm } from '../../types';
import { ReactiveFormUtilityService } from '../../services/reactive-form-utility/reactive-form-utility.service';
import { FormService } from '../../services/form/form.service';

export interface FormDefinitionInput{
  form?: IForm;
  markFGAsDirtySubject$?: Subject<any>;
  mode: CreateOrEdit;
  formsList: IForm[];
}

/**
 * Used for rendering form's definition when we are creating/editing a form. 
 * It handles setting form name and its fields, fields can be added/edited or deleted.
 * 
 * This component takes a mode which can be either create or edit. In case of edit, form would be required
 * markFGAsDirtySubject$ can be optionally passed in if we want to mark the form dirty from parent component.
 * formsList is needed to render the parent selection dropdown.
 * 
 * It outputs a formGroup which reflects user selection for entire form.
 */
@Component({
  selector: 'form-definition',
  templateUrl: './form-definition.component.html',
  styleUrls: ['./form-definition.component.scss']
})
export class FormDefinitionComponent implements OnInit {

  constructor(private fb: FormBuilder, private formUitilityService: ReactiveFormUtilityService, private formService: FormService) { }

  @Input() config: FormDefinitionInput; 
  @Output() formDefinitionUpdate: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @ViewChild("accordion", { read: ElementRef }) accordion;

  initDone: boolean = false;
  formGrp: FormGroup;
  validated = false;

  //UI control params
  formNameCompParam: RvnInputInput = { label: 'Name', placeholder: 'Minimum 3 characters', required: true };
  parentFormCompParam: RvnSelectInput = { label: 'Parent Form', placeholder: 'Select parent form if required', required: false, selectOptions: [] };
  fieldAddCompParam: RvnButtonInput = { type: 'mini-fab', icon: 'add', color: "accent" };
  collapseCompParam: RvnButtonInput = { type: 'icon', icon: 'unfold_less', color: "accent" };
  expandCompParam: RvnButtonInput = { type: 'icon', icon: 'unfold_more', color: "accent" };
  deleteFieldCompParam: RvnButtonInput = { type: 'secondary', color: "warn" };
  undoDeleteFieldCompParam: RvnButtonInput = { type: 'secondary', color: "accent" };


  get fieldGroups(): FormArray {
    return this.formGrp.get('fields') as FormArray;
  };

  get formNameCtrl(): FormControl {
    return this.formGrp.get('name') as FormControl;
  }

  get formParentFormCtrl(): FormControl {
    return this.formGrp.get('attributes').get("parentForm").get("formId") as FormControl;
  }

  ngOnInit(): void {

    if (isNullOrUndefined(this.config.form))
      this.initNewFormGroup();
    else
      this.initFormGroupFromDefinition();

    this.handleMarkingAsDirty();
    this.handleParentSelectOptions();
    this.initDone = true;
  }

  initNewFormGroup() {
    this.formGrp = this.formService.getNewDefinitionFG();

    this.addField(false);

    this.formDefinitionUpdate.emit(this.formGrp);

    this.formGrp.valueChanges.subscribe(val => {
      this.formDefinitionUpdate.emit(this.formGrp);
    });
  }


  initFormGroupFromDefinition() {
    this.formGrp = this.formService.getDefinitionFG(this.config.form);

    this.formGrp.valueChanges.subscribe(val => {
      this.formDefinitionUpdate.emit(this.formGrp);
    });
  }

  handleParentSelectOptions() {
    this.parentFormCompParam.selectOptions = this.config.formsList.map(f => { return { key: f.id, value: f.name } });
    if (this.config.mode === "edit") this.parentFormCompParam.placeholder = "";
  }


  handleMarkingAsDirty() {
    if (this.config.markFGAsDirtySubject$)
      this.config.markFGAsDirtySubject$.subscribe(_ => {

        // Mark all as dirty
        this.formUitilityService.markNestedFormGroupDirty(this.formGrp);

        // expand all INVALID fields
        this.fieldGroups.controls
          .filter(c => c.status === "INVALID")
          .forEach(c => c.get("attributes").get("_expanded").setValue(true));

        this.validated = true;
      });
  }

  addField(scroll: boolean = true) {
    let fg = this.formService.getNewFieldFG();
    this.fieldGroups.push(fg);
    fg.get("attributes").get("position").setValue(this.fieldGroups.controls.length - 1);
    if (scroll) this.scrollToBottomOfFieldsList();
  }

  deleteField(index: number, fieldGroup: AbstractControl) {
    if (this.fieldGroups.length > 1) {
      if (!fieldGroup.get("markDeleted")) this.fieldGroups.removeAt(index);
      else fieldGroup.get("markDeleted").setValue(true);

      this.updatePositionAttributeOfAllFields();
    }
  }

  undoDelete(fieldGroup: AbstractControl) {
    fieldGroup.get("markDeleted").setValue(false);
    this.updatePositionAttributeOfAllFields();
  }

  changePositionOfField(event) {
    let control = this.fieldGroups.controls.splice(event.previousIndex, 1)[0];
    this.fieldGroups.controls.splice(event.currentIndex, 0, control);
    this.fieldGroups.markAsDirty();
    this.updatePositionAttributeOfAllFields();
  }

  scrollToBottomOfFieldsList(): void {
    setTimeout(() => this.accordion.nativeElement.lastElementChild.scrollIntoView({ behavior: "smooth", block: "end" }));
  }

  updatePositionAttributeOfAllFields() {
    let numberOfDeletedFields = 0;
    this.fieldGroups.controls.forEach(c => {
      if (c.get("markDeleted") !== null && c.get("markDeleted").value === true) {
        numberOfDeletedFields++;
        c.get("attributes").get("position").setValue(null);
      }
      else
        c.get("attributes").get("position").setValue(this.fieldGroups.controls.indexOf(c) - numberOfDeletedFields)
    });
  }

  collapseAllFields() {
    this.fieldGroups.controls.forEach(c => c.get("attributes").get("_expanded").setValue(false, { emitEvent: false }));
  }

  expandAllFields() {
    this.fieldGroups.controls.forEach(c => c.get("attributes").get("_expanded").setValue(true, { emitEvent: false }));
  }
}