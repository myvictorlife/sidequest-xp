/*
 * File: product-category.selectors.ts
 * Project: sidequest-xp
 * Created: Friday, 6th May 2022 4:50:38 pm
 * Last Modified: Friday, 6th May 2022 5:39:56 pm
 * Copyright © 2022 Sidequest XP
 */

import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromProductCategory from '../reducer/category.reducer';

export const selectProductCategoryState =
  createFeatureSelector<fromProductCategory.State>('product_category');

export const selectAllProductCategories = createSelector(
  selectProductCategoryState,
  fromProductCategory.selectAllProductCategories
);

export const selectCurrentProductCategoryName = createSelector(
  selectProductCategoryState,
  fromProductCategory.getSelectedProductCategoryName
);
