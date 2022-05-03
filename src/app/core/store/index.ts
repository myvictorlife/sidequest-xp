/*
 * File: index.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 8:20:40 am
 * Last Modified: Tuesday, 3rd May 2022 8:03:32 pm
 * Copyright © 2022 Sidequest XP
 */

import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import { MetaReducer } from '@ngrx/store';
import { environment } from '@environment';

import * as fromProduct from './product/reducer/product.reducer';

export interface State {
  products: fromProduct.State;
}

export const reducers: ActionReducerMap<State> = {
  products: fromProduct.reducer,
};

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

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
