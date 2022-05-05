/*
 * File: cart.effects.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 10:23:14 pm
 * Last Modified: Thursday, 5th May 2022 1:50:56 pm
 * Copyright © 2022 Sidequest XP
 */

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as fromCart from '@sidequest-xp-core/store/cart/actions/cart.actions';
import { ShoppingCartService } from '@sidequest-xp-shared/shopping-cart/shopping-cart.service';
import { of, switchMap, withLatestFrom } from 'rxjs';
import { selectCurrentShoppingCart } from '../selectors/cart.selectors';

@Injectable()
export class CartEffects {
  addItemToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCart.addItemToCart),
      withLatestFrom(this.store.select(selectCurrentShoppingCart)),
      switchMap(([item, shoppingCart]) => {
        const product = JSON.parse(JSON.stringify(item.product));
        const shoppingCartLatest = shoppingCart
          ? JSON.parse(JSON.stringify(shoppingCart))
          : this.shoppingCartService.createShoppingCart();
        const cart = this.shoppingCartService.addProduct(
          shoppingCartLatest,
          product
        );
        return of(fromCart.addOrUpdateShoppingCart({ shoppingCart: cart }));
      })
    )
  );

  removeItemToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCart.removeItemFromCart),
      withLatestFrom(this.store.select(selectCurrentShoppingCart)),
      switchMap(([item, shoppingCart]) => {
        const product = JSON.parse(JSON.stringify(item.product));
        const shoppingCartLatest = shoppingCart
          ? JSON.parse(JSON.stringify(shoppingCart))
          : this.shoppingCartService.createShoppingCart();
        const cart = this.shoppingCartService.removeProduct(
          shoppingCartLatest,
          product
        );
        return of(fromCart.addOrUpdateShoppingCart({ shoppingCart: cart }));
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private shoppingCartService: ShoppingCartService
  ) {}
}
