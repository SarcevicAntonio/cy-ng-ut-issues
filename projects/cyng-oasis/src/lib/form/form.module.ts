import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [
    CheckboxComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    FormsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
  ],
  exports: [
    CheckboxComponent,
  ]
})

export class FormModule { }
