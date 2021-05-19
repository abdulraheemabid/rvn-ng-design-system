import { Component, Injector, ViewChild } from "@angular/core";
import { ControlValueAccessor, FormControl, FormControlDirective, NgControl } from "@angular/forms";

@Component({ template: '' })
export abstract class CustomFormControlValueAccessor implements ControlValueAccessor {

    constructor(private injector: Injector) { }

    @ViewChild(FormControlDirective, { static: true })
    formControlDirective: FormControlDirective;

    get formControl(): FormControl {
        const ngControl: NgControl = this.injector.get(NgControl, null);
        return ngControl.control as FormControl;
    }

    registerOnTouched(fn: any): void {
        this.formControlDirective?.valueAccessor.registerOnTouched(fn);
    }

    registerOnChange(fn: any): void {
        this.formControlDirective?.valueAccessor.registerOnChange(fn);
    }

    writeValue(obj: any): void {
        this.formControlDirective?.valueAccessor.writeValue(obj);
    }

    setDisabledState(isDisabled: boolean): void {
        this.formControlDirective?.valueAccessor.setDisabledState(isDisabled);
    }

}
