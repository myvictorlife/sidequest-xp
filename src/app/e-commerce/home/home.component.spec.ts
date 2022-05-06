/*
 * File: home.component.spec.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 6:46:01 pm
 * Last Modified: Friday, 6th May 2022 6:00:35 pm
 * Copyright © 2022 Sidequest XP
 */

import { ComponentsModule } from '@sidequest-xp-components/components.module';

import { HomeComponent } from './home.component';
import { provideMockStore } from '@ngrx/store/testing';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader,
} from '@ngx-translate/core';

import { ProductsComponent } from '../products/products.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductCategoryComponent } from '../product-category/product-category.component';
import { MatChipsModule } from '@angular/material/chips';
import { ProductCategoryService } from '../product-category/product-category.service';
describe('HomeComponent', () => {
  let spectator: Spectator<HomeComponent>;

  let initialState: any;

  const createComponent = createComponentFactory({
    component: HomeComponent,
    imports: [
      RouterTestingModule,
      ComponentsModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: TranslateFakeLoader,
        },
      }),
      MatChipsModule,
    ],
    providers: [
      provideMockStore({
        initialState,
      }),
      ProductCategoryService,
    ],
    declarations: [ProductsComponent, ProductCategoryComponent],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
