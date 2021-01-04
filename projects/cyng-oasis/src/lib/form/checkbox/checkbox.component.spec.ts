import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateModule } from '@ngx-translate/core';
import { initEnvHtml, mountHtml, setConfig } from 'cypress-angular-unit-test';
import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  it('shows the input', () => {
    setConfig({ cssFile: 'node_modules/@angular/material/prebuilt-themes/indigo-pink.css', });
    // Init Angular stuff
    initEnvHtml(CheckboxComponent, {
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule,
        MatCheckboxModule,
        MatSlideToggleModule,
      ]
    });
    // component + any inputs object
    const fixture = mountHtml(`
    <cyng-checkbox>Hello World</cyng-checkbox>
    `);
    fixture.detectChanges()
    // mount(CheckboxComponent, { title: 'Hello World' });
    // use any Cypress command afterwards
    cy.contains('Hello World');
  });
});