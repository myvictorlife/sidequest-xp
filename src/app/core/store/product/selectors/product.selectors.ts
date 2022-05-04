/*
 * File: product.selectors.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 5:40:32 pm
 * Last Modified: Wednesday, 4th May 2022 5:44:42 pm
 * Copyright © 2022 Sidequest XP
 */

import * as fromProduct from '../reducer/product.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectProductState =
  createFeatureSelector<fromProduct.State>('products');

export const selectProductsIds = createSelector(
  selectProductState,
  fromProduct.selectProductIds
);
export const selectProductEntities = createSelector(
  selectProductState,
  fromProduct.selectProductEntities
);
export const selectAllProducts = createSelector(
  selectProductState,
  fromProduct.selectAllProducts
);
export const selectProductTotal = createSelector(
  selectProductState,
  fromProduct.selectProductTotal
);
export const selectCurrentProductId = createSelector(
  selectProductState,
  fromProduct.getSelectedProductId
);

export const selectCurrentProduct = createSelector(
  selectProductEntities,
  selectCurrentProductId,
  (productEntities, productId) => productId && productEntities[productId]
);
