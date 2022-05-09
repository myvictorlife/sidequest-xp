/*
 * File: product-category.actions.spec.ts
 * Project: sidequest-xp
 * Created: Monday, 9th May 2022 7:28:31 pm
 * Last Modified: Monday, 9th May 2022 7:32:23 pm
 * Copyright © 2022 Sidequest XP
 */

import { ProductCategory } from '@sidequest-xp-store/models/product-category.models';
import * as fromProductCategoryActions from './product-category.actions';
describe('ProductActions', () => {
  it('should load success', () => {
    const productCategory: ProductCategory = {
      id: '1',
      name: 'Unit Test',
    };
    const action = fromProductCategoryActions.loadSuccess({
      productCategory: [productCategory],
    });
    expect(action.type).toEqual(fromProductCategoryActions.loadSuccess.type);
    expect(action.productCategory).toEqual([productCategory]);
  });

  it('should select product by id', () => {
    const productCategory: ProductCategory = {
      id: '1',
      name: 'Unit Test',
    };
    const action = fromProductCategoryActions.selectCategory({
      productCategory,
    });
    expect(action.type).toEqual(fromProductCategoryActions.selectCategory.type);
    expect(action.productCategory).toEqual(productCategory);
  });
});
