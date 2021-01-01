import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { initEnv, mount } from 'cypress-angular-unit-test';
import { IconModule } from '../../misc/icon/icon.module';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  it('shows the input', () => {
    // Init Angular stuff
    initEnv(CardComponent, {
      imports: [
        CommonModule,
        TranslateModule,
        IconModule,
      ]
    });
    // component + any inputs object
    mount(CardComponent, { title: 'Hello World' });
    // use any Cypress command afterwards
    cy.contains('Hello World');
  });
});