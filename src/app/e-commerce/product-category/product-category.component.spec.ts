/*
 * File: product-category.component.spec.ts
 * Project: sidequest-xp
 * Created: Friday, 6th May 2022 4:47:21 pm
 * Last Modified: Friday, 6th May 2022 5:58:17 pm
 * Copyright © 2022 Sidequest XP
 */

import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';

import { ProductCategoryComponent } from './product-category.component';
import { MatChipsModule } from '@angular/material/chips';
import { ProductCategoryService } from './product-category.service';

describe('ProductCategoryComponent', () => {
  let spectator: Spectator<ProductCategoryComponent>;

  let initialState: any;

  const createComponent = createComponentFactory({
    component: ProductCategoryComponent,
    imports: [MatChipsModule],
    providers: [
      provideMockStore({
        initialState,
      }),
      ProductCategoryService,
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
