/*
 * File: products.component.spec.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 7:18:04 pm
 * Last Modified: Wednesday, 4th May 2022 12:13:22 pm
 * Copyright © 2022 Sidequest XP
 */

import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';
import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader,
} from '@ngx-translate/core';

describe('ProductsComponent', () => {
  let spectator: Spectator<ProductsComponent>;

  let initialState: any;

  const createComponent = createComponentFactory({
    component: ProductsComponent,
    imports: [
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: TranslateFakeLoader,
        },
      }),
    ],
    providers: [
      provideMockStore({
        initialState,
      }),
    ],
    declarations: [ProductComponent],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
