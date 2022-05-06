/*
 * File: index.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 8:20:40 am
 * Last Modified: Friday, 6th May 2022 4:41:19 pm
 * Copyright © 2022 Sidequest XP
 */

import { ActionReducerMap } from '@ngrx/store';

import { MetaReducer } from '@ngrx/store';
import { environment } from '@environment';

import * as fromProduct from './product/reducer/product.reducer';
import * as fromCart from './cart/reducer/cart.reducer';
import * as fromProductCategory from './product-category/reducer/category.reducer';

export interface State {
  products: fromProduct.State;
  shopping_cart: fromCart.State;
  product_category: fromProductCategory.State;
}

export const reducers: ActionReducerMap<State> = {
  products: fromProduct.reducer,
  shopping_cart: fromCart.reducer,
  product_category: fromProductCategory.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
