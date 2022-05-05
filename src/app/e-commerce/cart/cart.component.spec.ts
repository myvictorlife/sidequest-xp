/*
 * File: cart.component.spec.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 5:49:19 pm
 * Last Modified: Thursday, 5th May 2022 9:28:22 am
 * Copyright © 2022 Sidequest XP
 */

import { CartComponent } from './cart.component';

import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { ComponentsModule } from '@sidequest-xp-components/components.module';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader,
} from '@ngx-translate/core';
import { CartService } from './cart.service';
describe('CartComponent', () => {
  let spectator: Spectator<CartComponent>;

  let initialState: any;

  const createComponent = createComponentFactory({
    component: CartComponent,
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
      CartService,
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
