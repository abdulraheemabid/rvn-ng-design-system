import { Injectable } from '@angular/core';
import { FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';

/**
 * Bundles common functionality needed to work with Angular's Reactive Forms.
 */
@Injectable({
  providedIn: 'root'
})
export class ReactiveFormUtilityService {

  constructor() { }

  markNestedFormGroupDirty(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      switch (formGroup.get(key).constructor.name) {
        case "FormGroup":
          this.markNestedFormGroupDirty(formGroup.get(key) as FormGroup);
          break;
        case "FormArray":
          this.markFormArrayDirty(formGroup.get(key) as FormArray);
          break;
        case "FormControl":
          this.markFormControlDirty(formGroup.get(key) as FormControl);
          break;
      }
    });
  }

  markFormArrayDirty(formArray: FormArray) {
    formArray.controls.forEach(control => {
      switch (control.constructor.name) {
        case "FormGroup":
          this.markNestedFormGroupDirty(control as FormGroup);
          break;
        case "FormArray":
          this.markFormArrayDirty(control as FormArray);
          break;
        case "FormControl":
          this.markFormControlDirty(control as FormControl);
          break;
      }
    });
  }

  markFormControlDirty(formControl: FormControl) {
    formControl.markAsDirty();

  }

  hasRequiredField(abstractControl: AbstractControl): boolean {
    if (!abstractControl) {
      return false;
    }

    if (abstractControl.validator) {
      const validator = abstractControl.validator({} as AbstractControl);
      if (validator && validator.required) {
        return true;
      }
    }

    if (abstractControl['controls']) {
      for (const controlName in abstractControl['controls']) {
        if (abstractControl['controls'][controlName]) {
          if (this.hasRequiredField(abstractControl['controls'][controlName])) {
            return true;
          }
        }
      }
    }

    return false;
  };
}
