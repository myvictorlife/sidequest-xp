/*
 * File: cart.actions.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 10:06:18 pm
 * Last Modified: Friday, 6th May 2022 4:13:13 pm
 * Copyright © 2022 Sidequest XP
 */

import { createAction, props } from '@ngrx/store';
import { Product } from '@sidequest-xp-store/models/product.models';
import { ShoppingCart } from '../../models/cart.model';

export const addItemToCart = createAction(
  '[Cart] Add Item to Cart',
  props<{ product: Product }>()
);

export const removeItemFromCart = createAction(
  '[Cart] Remove Item From Cart',
  props<{ product: Product }>()
);

export const addOrUpdateShoppingCart = createAction(
  '[Cart] Add or Update Shopping Cart',
  props<{ shoppingCart: ShoppingCart }>()
);
