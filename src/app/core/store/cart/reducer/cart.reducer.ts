/*
 * File: cart.reducer.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 10:11:12 pm
 * Last Modified: Friday, 6th May 2022 4:40:55 pm
 * Copyright © 2022 Sidequest XP
 */

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as fromCart from '@sidequest-xp-core/store/cart/actions/cart.actions';
import { ShoppingCart } from '../../models/cart.model';

export interface State extends EntityState<ShoppingCart> {
  selectedShoppingCartId: string | null;
}

export function selectClixCartId(a: ShoppingCart): string {
  return a.cartId;
}

export const adapter: EntityAdapter<ShoppingCart> =
  createEntityAdapter<ShoppingCart>({
    selectId: selectClixCartId,
  });

export const initialState: State = adapter.getInitialState({
  selectedShoppingCartId: null,
});

export const reducer = createReducer(
  initialState,
  on(fromCart.addOrUpdateShoppingCart, (state, { shoppingCart }) =>
    adapter.setOne(shoppingCart, {
      ...state,
      selectedShoppingCartId: shoppingCart.cartId,
    })
  )
);

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

// select the array of shopping cart ids
export const selectShoppingCartIds = selectIds;

// select the dictionary of shopping cart entities
export const selectShoppingCartEntities = selectEntities;

// select the array of shopping cart
export const selectAllShoppingCart = selectAll;

// select the total shopping cart count
export const selectShoppingCartTotal = selectTotal;
