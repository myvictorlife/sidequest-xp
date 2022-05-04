/*
 * File: cart.component.spec.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 5:49:19 pm
 * Last Modified: Wednesday, 4th May 2022 6:09:35 pm
 * Copyright © 2022 Sidequest XP
 */


import { CartComponent } from './cart.component';

import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { ComponentsModule } from '@sidequest-xp-components/components.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('CartComponent', () => {

  let spectator: Spectator<CartComponent>;

  const createComponent = createComponentFactory({
    component: CartComponent,
    imports: [
      RouterTestingModule,
      ComponentsModule
    ]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
