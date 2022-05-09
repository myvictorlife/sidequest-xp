/*
 * File: product-category.service.spec.ts
 * Project: sidequest-xp
 * Created: Monday, 9th May 2022 7:12:10 pm
 * Last Modified: Monday, 9th May 2022 7:17:52 pm
 * Copyright © 2022 Sidequest XP
 */

import {
  createServiceFactory,
  SpectatorService,
  SpyObject,
} from '@ngneat/spectator';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ProductCategoryService } from './product-category.service';
import * as fromProductCategory from '@sidequest-xp-core/store/product-category/actions/product-category.actions';
import { ProductCategory } from '@sidequest-xp-store/models/product-category.models';

describe('ProductCategoryService', () => {
  let spectator: SpectatorService<ProductCategoryService>;
  let mockStore: SpyObject<MockStore>;
  const initialState: any = {};

  const createService = createServiceFactory({
    service: ProductCategoryService,
    providers: [
      provideMockStore({
        initialState,
      }),
    ],
  });

  beforeEach(() => {
    spectator = createService();
    mockStore = spectator.inject(MockStore);
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('should select category', () => {
    const productCategory: ProductCategory = {
      id: '1',
      name: 'Unit Test',
    };
    const watcher = jest.spyOn(mockStore, 'dispatch');
    spectator.service.selectCategory(productCategory);
    expect(watcher).toHaveBeenCalledWith(
      fromProductCategory.selectCategory({ productCategory })
    );
  });
});
