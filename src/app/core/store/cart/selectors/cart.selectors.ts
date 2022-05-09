/*
 * File: cart.selectors.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 10:39:37 pm
 * Last Modified: Monday, 9th May 2022 4:09:16 pm
 * Copyright © 2022 Sidequest XP
 */

import * as fromCart from '../reducer/cart.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectShoppingCartState =
  createFeatureSelector<fromCart.State>('shopping_cart');

export const selectShoppingCartsIds = createSelector(
  selectShoppingCartState,
  fromCart.selectShoppingCartIds
);
export const selectShoppingCartEntities = createSelector(
  selectShoppingCartState,
  fromCart.selectShoppingCartEntities
);

export const selectAllShoppingCarts = createSelector(
  selectShoppingCartState,
  fromCart.selectAllShoppingCart
);
export const selectShoppingCartTotal = createSelector(
  selectShoppingCartState,
  fromCart.selectShoppingCartTotal
);
export const selectCurrentShoppingCartId = createSelector(
  selectShoppingCartState,
  fromCart.getSelectedCurrentShoppingCartId
);
export const selectCurrentShoppingCart = createSelector(
  selectShoppingCartEntities,
  selectCurrentShoppingCartId,
  (shoppingCartEntities, shoppingCartId) =>
    shoppingCartId && shoppingCartEntities[shoppingCartId]
);
export const selectTotalOfItem = createSelector(
  selectShoppingCartEntities,
  selectCurrentShoppingCartId,
  (shoppingCartEntities, shoppingCartId) =>
    shoppingCartId && shoppingCartEntities[shoppingCartId]?.qty
);
