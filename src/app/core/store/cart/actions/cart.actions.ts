/*
 * File: cart.actions.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 10:06:18 pm
 * Last Modified: Wednesday, 4th May 2022 10:27:01 pm
 * Copyright © 2022 Sidequest XP
 */

import { createAction, props } from '@ngrx/store';
import { Product } from '@sidequest-xp-store/product/models/product.models';
import { ShoppingCart } from '../models/cart.model';

export const addItemToCart = createAction(
  '[Cart] Add Item to Cart',
  props<{ product: Product }>()
);

export const addOrUpdateShoppingCart = createAction(
  '[Cart] Add or Update Shopping Cart',
  props<{ shoppingCart: ShoppingCart }>()
);
