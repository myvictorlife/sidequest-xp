/*
 * File: home.component.spec.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 6:46:01 pm
 * Last Modified: Wednesday, 4th May 2022 7:16:39 am
 * Copyright © 2022 Sidequest XP
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentsModule } from '@sidequest-xp-components/components.module';

import { HomeComponent } from './home.component';
import { provideMockStore } from '@ngrx/store/testing';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { ProductsComponent } from '../products/products.component';
import { ProductComponent } from '../products/product/product.component';
class FakeLoader implements TranslateLoader {
  getTranslation(): Observable<any> {
    return of({ test: 'This is a Fake translate' });
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let initialState: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, ProductsComponent, ProductComponent],
      imports: [
        ComponentsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: FakeLoader,
          },
        }),
      ],
      providers: [
        provideMockStore({
          initialState,
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
