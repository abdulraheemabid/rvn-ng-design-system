import { Component, ElementRef, forwardRef, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { CustomFormControlValueAccessor } from '../../utils/custom-form-control-value-accessor';
import { RvnChipsAutocompleteInput } from './rvn-chips-autocomplete.input';
import { KeyValue } from '@angular/common';
import { isNullOrUndefined } from '../../utils/funtions.util';
import { RvnStyleService } from '../../services/style/style.service';

@Component({
  selector: 'rvn-chips-autocomplete',
  templateUrl: './rvn-chips-autocomplete.component.html',
  styleUrls: ['./rvn-chips-autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RvnChipsAutocompleteComponent),
      multi: true
    }
  ]
})
export class RvnChipsAutocompleteComponent extends CustomFormControlValueAccessor implements OnInit {
  @Input() config: RvnChipsAutocompleteInput;
  inputFormControl: FormControl;
  filteredOptions: Observable<KeyValue<any, any>[]>;
  selectedOptions: Set<KeyValue<any, any>> = new Set();
  allOptions: KeyValue<any, any>[];
  formFieldAppearance: any;

  constructor(private _injector: Injector, private styleService: RvnStyleService) {
    super(_injector);
  }

  @ViewChild('inputElement') inputElement: ElementRef<HTMLInputElement>;
  @ViewChild('chipList') chipList;

  ngOnInit() {
    if (isNullOrUndefined(this.config)) this.config = { label: null, autoCompleteOption: null };
    if (isNullOrUndefined(this.config.required)) this.config.required = false;
    if (isNullOrUndefined(this.config.requiredErrorMessage)) this.config.requiredErrorMessage = `${this.config.label} is required`;
    if (isNullOrUndefined(this.config.styleVersion)) this.config.styleVersion = 'v1';

    this.formFieldAppearance = isNullOrUndefined(this.config?.appearance) ? this.styleService.getFormFieldStyle$ : of(this.config.appearance);

    this.allOptions = [...this.config.autoCompleteOption];

    let opts = [];
    if (this.config.required) opts.push(Validators.required);
    this.inputFormControl = new FormControl('', opts);

    this.initValueIfAlreadyExists();

    //On key enter, filter the autocomple list with given key
    this.filteredOptions = this.inputFormControl.valueChanges.pipe(
      map((enteredKey: string | null) => enteredKey ? this._filter(enteredKey) : this.allOptions.slice())
    );

  }

  showError() {
    if (this.config.required && this.formControl.dirty) {
      if (this.selectedOptions.size === 0) {
        this.chipList.errorState = true;
        return true;
      }
      else {
        this.chipList.errorState = false;
        return false;
      }
    }
    return false;
  }

  initValueIfAlreadyExists() {
    if (!isNullOrUndefined(this.formControl.value)) {
      this.formControl.value.forEach(sv => {
        const selectedOption = this.allOptions.find(o => o.key === sv.key);
        if (selectedOption) this.selectedOptions.add(selectedOption);
      })
      this.inputFormControl.setValue(null);
      this.syncFormControl(false);
    }
  }

  remove(option: KeyValue<any, any>): void {
    this.selectedOptions.delete(option);
    this.syncFormControl();

    //if (this.config.required && this.selectedOptions.size === 0) this.chipList.errorState = true;
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedOptions.add(event.option.value);
    this.inputElement.nativeElement.value = '';
    this.inputFormControl.setValue(null);
    this.syncFormControl();
    //this.chipList.errorState = false;
  }

  private _filter(value: string | KeyValue<any, any>): KeyValue<any, any>[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.value.toLowerCase();
    return this.allOptions.filter(option => option.value.toLowerCase().indexOf(filterValue) === 0);
  }

  syncFormControl(markAsDirty: boolean = true) {
    this.formControl.setValue([...this.selectedOptions]);
    if (markAsDirty) this.formControl.markAsDirty();
  }

}
