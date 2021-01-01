import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IconModule } from '../../misc/icon/icon.module';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    TranslateModule,
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
