/*
 * File: product-details.component.spec.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 8:12:27 am
 * Last Modified: Wednesday, 4th May 2022 6:14:22 pm
 * Copyright © 2022 Sidequest XP
 */

import { ProductDetailsComponent } from './product-details.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentsModule } from '@sidequest-xp-components/components.module';

describe('ProductDetailsComponent', () => {
  let spectator: Spectator<ProductDetailsComponent>;

  let initialState: any;

  const createComponent = createComponentFactory({
    component: ProductDetailsComponent,
    imports: [
      RouterTestingModule,
      ComponentsModule
    ],
    providers: [
      provideMockStore({
        initialState,
      }),
    ]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
