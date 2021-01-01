import { Component, ElementRef, EventEmitter, Inject, Injector, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from '../control-value-accessor-connector';

@Component({
  selector: 'cyng-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CheckboxComponent,
    multi: true
  }]
})
export class CheckboxComponent extends ControlValueAccessorConnector implements OnInit {

  @Input() isSwitch = true;
  @ViewChild('label') label: ElementRef;
  @ViewChild('slider') slider;
  @ViewChild('cBox') cBox;
  @Output() change = new EventEmitter<Event>();
  @Input() checked: boolean;  // needs to be undefined to not set ngModel in ngOnInit()
  @Input() tiMode = false;
  @Input() color = 'default';

  constructor(@Inject(Injector) injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.setRequired();
    
    // this code is cursed.
    // if-statement needed to support ngModel
    // while supporting checked property with disabled
    if (this.checked !== undefined) {
      this.control.setValue(this.checked);
      this.ngModel = this.checked;
      this.modelControl.setValue(this.checked);
    }
  }

  ngAfterViewInit() {
    if (this.color !== 'default') {
      this.setCustomColor();
    }
  }

  setCustomColor() {
    // reused to not use checked since checked needs to be undefined for formcontrols to work
    let value = this.control.value;
    if (this.ngModel !== undefined) {
      value = this.ngModel;
    }
    if (this.slider || this.cBox) { // guard
      if (this.isSwitch) { // if switch
        const switcher = document.querySelectorAll<HTMLElement>('#' + this.slider.id + ' .mat-slide-toggle-thumb')[0];
        if (value) {
          switcher.style.background = this.color;
        } else {
          switcher.style.background = '#ffffff';
        }
      } else {  // else checkbox
        const cBox = document.querySelectorAll<HTMLElement>('#' + this.cBox.id + ' .mat-checkbox-background')[0];
        if (value) {
          cBox.style.background = this.color;
        } else {
          cBox.style.background = 'none';
        }
      }
    }
  }

  onChange(event) {
    this.change.emit(event);
    if (this.color !== 'default') {
      this.setCustomColor();
    }
  }
}
