/*
 * File: product-details.component.spec.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 8:12:27 am
 * Last Modified: Thursday, 5th May 2022 9:27:15 am
 * Copyright © 2022 Sidequest XP
 */

import { ProductDetailsComponent } from './product-details.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentsModule } from '@sidequest-xp-components/components.module';
import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader,
} from '@ngx-translate/core';
import { ProductDetailsService } from './product-details.service';

describe('ProductDetailsComponent', () => {
  let spectator: Spectator<ProductDetailsComponent>;

  let initialState: any;

  const createComponent = createComponentFactory({
    component: ProductDetailsComponent,
    imports: [
      RouterTestingModule,
      ComponentsModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: TranslateFakeLoader,
        },
      }),
    ],
    providers: [
      ProductDetailsService,
      provideMockStore({
        initialState,
      }),
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
