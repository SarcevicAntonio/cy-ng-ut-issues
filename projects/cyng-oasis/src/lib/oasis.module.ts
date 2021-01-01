import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from './container/card/card.module';
import { FormModule } from './form/form.module';
import { IconModule } from './misc/icon/icon.module';

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
    // Misc
    IconModule,
  ],
  exports: [
    // Form
    FormModule,
    // Container
    CardModule,
    // Misc
    IconModule,
  ]
})
export class OasisModule { }
