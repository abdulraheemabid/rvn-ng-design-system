import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RvnStyleService {

  constructor() { }

  private _formFieldStyle$: BehaviorSubject<FormFieldAppearance> = new BehaviorSubject("outline");

  get getFormFieldStyle() {
    return this._formFieldStyle$.value;
  }

  get getFormFieldStyle$() {
    return this._formFieldStyle$;
  }

  setFormFieldStyle(style: FormFieldAppearance) {
    this._formFieldStyle$.next(style);
  }
}

export type FormFieldAppearance = "legacy" | "standard" | "fill" | "outline";
