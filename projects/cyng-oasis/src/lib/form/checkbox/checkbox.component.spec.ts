import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateModule } from '@ngx-translate/core';
import { initEnvHtml, mountHtml, setConfig } from 'cypress-angular-unit-test';
import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  beforeEach(() => {
    setConfig({
      cssFile: 'node_modules/@angular/material/prebuilt-themes/indigo-pink.css',
      style: './checkbox.component.scss' 
    });
    // Init Angular stuff
    initEnvHtml(CheckboxComponent, {
      imports: [
        ReactiveFormsModule,
        FormsModule,
        TranslateModule,
        MatCheckboxModule,
        MatSlideToggleModule,
      ]
    });
  });
  it('shows the input', () => {
    // component + any inputs object
    let ngModel = true;
    const fix = mountHtml(`<cyng-checkbox>Hello World</cyng-checkbox>`);
    fix.detectChanges();
    // mount(CheckboxComponent, { title: 'Hello World' });
    // use any Cypress command afterwards
    cy.contains('Hello World');
  });
});