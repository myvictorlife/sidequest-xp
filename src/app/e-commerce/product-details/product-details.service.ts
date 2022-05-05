/*
 * File: product-details.service.ts
 * Project: sidequest-xp
 * Created: Thursday, 5th May 2022 8:48:02 am
 * Last Modified: Thursday, 5th May 2022 8:51:48 am
 * Copyright © 2022 Sidequest XP
 */

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '@sidequest-xp-store/product/models/product.models';
import * as fromCart from '@sidequest-xp-core/store/cart/actions/cart.actions';

@Injectable()
export class ProductDetailsService {
  constructor(private store: Store) {}

  addItemToCart(product: Product) {
    this.store.dispatch(fromCart.addItemToCart({ product }));
  }

  removeItemFromCart(product: Product) {
    this.store.dispatch(fromCart.removeItemFromCart({ product }));
  }
}
