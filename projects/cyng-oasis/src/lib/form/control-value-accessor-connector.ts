import { Injector, Input, ViewChild, Output, EventEmitter, OnInit, Directive } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective } from '@angular/forms';

/**
 * This class can be extended to allow FormControls to be attached to custom components
 * that already have angular form control capabilities.
 * This will forward any FromControl to the native element.
 * Src: https://medium.com/angular-in-depth/dont-reinvent-the-wheel-when-implementing-controlvalueaccessor-a0ed4ad0fafd
 */

@Directive()
export class ControlValueAccessorConnector implements ControlValueAccessor, OnInit {
  @ViewChild(FormControlDirective, { static: true })
  formControlDirective: FormControlDirective;

  @Input()
  formControl: FormControl;

  @Input()
  formControlName: string;

  @Input() ngModel;
  modelControl = new FormControl();
  @Output() ngModelChange = new EventEmitter<any>();

  @Input() disabled = false;

  get control() {
    if (this.formControl) {
      return this.formControl;
    } else if (this.formControlName) {
      return this.controlContainer.control.get(this.formControlName);
    }
    return this.modelControl;
  }

  isRequired = false;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.setRequired();
  }

  setRequired() {
    if (this.control && this.control.validator) {
      const { validator } = this.control;
      const validation = validator(new FormControl());
      this.isRequired = validation !== null && validation.required === true;
    } else {
      this.isRequired = false;
    }
  }

  get controlContainer() {
    return this.injector.get(ControlContainer);
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
  }

  onNgModelChange(val) {
    this.ngModelChange.emit(val);
  }
}
