/*
 * File: cart.component.spec.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 5:49:19 pm
 * Last Modified: Thursday, 5th May 2022 4:41:59 pm
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
import { SharedModule } from '@sidequest-xp-shared/shared.module';
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
      SharedModule,
    ],
    providers: [
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
