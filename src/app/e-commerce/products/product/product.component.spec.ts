/*
 * File: product.component.spec.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 9:14:18 pm
 * Last Modified: Wednesday, 4th May 2022 6:05:11 pm
 * Copyright © 2022 Sidequest XP
 */

import { ProductComponent } from './product.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader,
} from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
describe('ProductComponent', () => {
  let spectator: Spectator<ProductComponent>;

  let initialState: any;

  const createComponent = createComponentFactory({
    component: ProductComponent,
    imports: [
      RouterTestingModule,
      MatCardModule,
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
