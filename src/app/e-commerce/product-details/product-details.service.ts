/*
 * File: product-details.service.ts
 * Project: sidequest-xp
 * Created: Thursday, 5th May 2022 8:48:02 am
 * Last Modified: Friday, 6th May 2022 4:11:18 pm
 * Copyright © 2022 Sidequest XP
 */

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCart from '@sidequest-xp-core/store/cart/actions/cart.actions';
import { Product } from '@sidequest-xp-store/models/product.models';

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
