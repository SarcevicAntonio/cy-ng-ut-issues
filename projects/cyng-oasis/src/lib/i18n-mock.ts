import { EventEmitter } from '@angular/core';
import { of } from 'rxjs';

export class TranslateServiceStub {

  public onLangChange: EventEmitter<any> = new EventEmitter();
  public onTranslationChange: EventEmitter<any> = new EventEmitter();
  public onDefaultLangChange: EventEmitter<any> = new EventEmitter();


  public get(key: any): any {
    return of(key);
  }
}
