import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    InlineSVGModule.forRoot()
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
