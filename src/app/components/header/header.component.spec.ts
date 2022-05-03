/*
 * File: header.component.spec.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 7:10:24 pm
 * Last Modified: Tuesday, 3rd May 2022 7:50:16 pm
 * Copyright © 2022 Sidequest XP
 */


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of({ test: 'This is a Fake translate' });
  }
}
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: FakeLoader,
          },
        })
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
