/*
 * File: product-category.selectors.spec.ts
 * Project: sidequest-xp
 * Created: Monday, 9th May 2022 7:32:47 pm
 * Last Modified: Monday, 9th May 2022 7:56:54 pm
 * Copyright © 2022 Sidequest XP
 */

import { ProductCategory } from '@sidequest-xp-store/models/product-category.models';
import * as fromCategoryReducer from '../reducer/category.reducer';
import * as fromCategorySelectors from './product-category.selectors';
describe('ProductCategorySelectors', () => {
  const initialState: fromCategoryReducer.State = {
    ids: ['Unit Test'],
    entities: {
      1: {
        id: '5',
        name: 'Unit Test',
      } as ProductCategory,
    },
    selectedProductCategoryName: 'Unit Test',
  };

  it('should select the product category state', () => {
    expect(
      fromCategorySelectors.selectProductCategoryState.projector(initialState)
    ).toEqual(initialState);
  });

  it('should select current product category name', () => {
    expect(
      fromCategorySelectors.selectCurrentProductCategoryName.projector(
        initialState
      )
    ).toEqual('Unit Test');
  });
});
