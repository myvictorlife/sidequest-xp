/*
 * File: cart.service.ts
 * Project: sidequest-xp
 * Created: Thursday, 5th May 2022 9:09:25 am
 * Last Modified: Thursday, 5th May 2022 9:10:25 am
 * Copyright © 2022 Sidequest XP
 */

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCart from '@sidequest-xp-core/store/cart/actions/cart.actions';
import { Product } from '@sidequest-xp-store/product/models/product.models';

@Injectable()
export class CartService {
  constructor(private store: Store) {}

  addItemToCart(product: Product) {
    this.store.dispatch(fromCart.addItemToCart({ product }));
  }

  removeItemFromCart(product: Product) {
    this.store.dispatch(fromCart.removeItemFromCart({ product }));
  }
}
