/*
 * File: product.effects.spec.ts
 * Project: sidequest-xp
 * Created: Tuesday, 10th May 2022 12:01:53 pm
 * Last Modified: Tuesday, 10th May 2022 12:05:18 pm
 * Copyright © 2022 Sidequest XP
 */

import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';
import { ProductService } from '@sidequest-xp-shared/product/product.service';

import { ProductEffects } from './product.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';

describe('IsfDappEffects', () => {
  let spectator: SpectatorService<ProductEffects>;
  let actions: ReplaySubject<any>;
  const initialState: any = {};

  const createComponent = createServiceFactory({
    service: ProductEffects,
    providers: [
      provideMockStore({
        initialState,
      }),
      provideMockActions(() => actions),
    ],
    mocks: [ProductService],
    entryComponents: [],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.service).toBeTruthy();
  });
});
