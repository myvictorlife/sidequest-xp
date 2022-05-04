/*
 * File: product-details.component.spec.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 8:12:27 am
 * Last Modified: Wednesday, 4th May 2022 12:14:53 pm
 * Copyright © 2022 Sidequest XP
 */

import { ProductDetailsComponent } from './product-details.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('ProductDetailsComponent', () => {
  let spectator: Spectator<ProductDetailsComponent>;

  const createComponent = createComponentFactory({
    component: ProductDetailsComponent,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
