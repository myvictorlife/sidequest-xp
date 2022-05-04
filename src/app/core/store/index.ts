/*
 * File: index.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 8:20:40 am
 * Last Modified: Wednesday, 4th May 2022 10:20:21 pm
 * Copyright © 2022 Sidequest XP
 */

import { ActionReducerMap } from '@ngrx/store';

import { MetaReducer } from '@ngrx/store';
import { environment } from '@environment';

import * as fromProduct from './product/reducer/product.reducer';
import * as fromCart from './cart/reducer/cart.reducer';

export interface State {
  products: fromProduct.State;
  shopping_cart: fromCart.State;
}

export const reducers: ActionReducerMap<State> = {
  products: fromProduct.reducer,
  shopping_cart: fromCart.reduceer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
