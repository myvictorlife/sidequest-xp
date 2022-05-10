/*
 * File: cart.effects.spec.ts
 * Project: sidequest-xp
 * Created: Tuesday, 10th May 2022 12:06:38 pm
 * Last Modified: Tuesday, 10th May 2022 12:22:08 pm
 * Copyright © 2022 Sidequest XP
 */

import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';

import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';
import { CartEffects } from './cart.effects';
import { ShoppingCartService } from '@sidequest-xp-shared/shopping-cart/shopping-cart.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

describe('CartEffects', () => {
  let spectator: SpectatorService<CartEffects>;
  let actions: ReplaySubject<any>;
  const initialState: any = {};

  const createComponent = createServiceFactory({
    service: CartEffects,
    providers: [
      provideMockStore({
        initialState,
      }),
      provideMockActions(() => actions),
    ],
    mocks: [ShoppingCartService, ToastrService, TranslateService],
    entryComponents: [],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.service).toBeTruthy();
  });
});
