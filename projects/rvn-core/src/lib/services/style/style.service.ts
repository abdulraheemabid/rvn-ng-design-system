import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RvnStyleService {

  constructor() { }

  private _formFieldStyle$: BehaviorSubject<FormFieldAppearance> = new BehaviorSubject("outline");

  /**
   * Get the value which is set for rvn-core's form fields appearance
   */
  get getFormFieldStyle() {
    return this._formFieldStyle$.value;
  }

  /**
   * Get the beheviorSubject which stores value for rvn-core's form fields appearance
   */
  get getFormFieldStyle$() {
    return this._formFieldStyle$;
  }

  /**
   * Set rvn-core's form fields appearance
   */
  setFormFieldStyle(style: FormFieldAppearance) {
    this._formFieldStyle$.next(style);
  }
}

export type FormFieldAppearance = "legacy" | "standard" | "fill" | "outline";
