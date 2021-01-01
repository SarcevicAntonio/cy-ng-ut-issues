import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from './container/card/card.module';
import { FormModule } from './form/form.module';

/**
 * MASTER MODULE
 * Add here to allow for easy import of all modules later
 */

@NgModule({
  imports: [
    CommonModule,
    // Form
    FormModule,
    // Container
    CardModule,
  ],
  exports: [
    // Form
    FormModule,
    // Container
    CardModule,
  ]
})
export class OasisModule { }
