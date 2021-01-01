import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { InlineSVGModule } from 'ng-inline-svg';
import { IconComponent } from './icon.component';

@NgModule({
  declarations: [IconComponent],
  imports: [
    CommonModule,
    MatIconModule,
    InlineSVGModule.forRoot()
  ],
  exports: [IconComponent],
})
export class IconModule { }
