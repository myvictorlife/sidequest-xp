/*
 * File: cart.effects.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 10:23:14 pm
 * Last Modified: Wednesday, 4th May 2022 11:10:48 pm
 * Copyright © 2022 Sidequest XP
 */

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as fromCart from '@sidequest-xp-core/store/cart/actions/cart.actions';
import { of, switchMap, withLatestFrom } from 'rxjs';
import { ShoppingCart } from '../models/cart.model';
import { selectCurrentShoppingCart } from '../selectors/cart.selectors';

@Injectable()
export class CartEffects {
  addItemToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCart.addItemToCart),
      withLatestFrom(this.store.select(selectCurrentShoppingCart)),
      switchMap(([item, shoppingCart]) => {
        const product = item.product;
        let cart: ShoppingCart = JSON.parse(JSON.stringify(shoppingCart));
        if (!cart) {
          cart = {
            cartId: '1',
            products: [],
            qty: 0,
            total: 0,
          } as ShoppingCart;
        }
        const products = cart.products.filter(
          (product) => product.id === product.id
        );
        if (products.length) {
          cart.total += +product.price;
          cart.qty++;
        } else {
          cart.products.push(product);
          cart.total += +product.price;
          cart.qty++;
        }
        return of(fromCart.addOrUpdateShoppingCart({ shoppingCart: cart }));
      })
    )
  );

  constructor(private actions$: Actions, private store: Store) {}
}
