/*
 * File: cart.component.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 5:49:19 pm
 * Last Modified: Tuesday, 10th May 2022 7:55:37 am
 * Copyright © 2022 Sidequest XP
 */

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShoppingCartService } from '@sidequest-xp-shared/shopping-cart/shopping-cart.service';
import { ShoppingCart } from '@sidequest-xp-store/models/cart.model';
import { selectCurrentShoppingCart } from '@sidequest-xp-store/cart/selectors/cart.selectors';
import { Product } from '@sidequest-xp-store/models/product.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sidequest-xp-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  selectShoppingCart$ = this.store.select(selectCurrentShoppingCart);
  shoppingCart: ShoppingCart | undefined;
  subscription = {} as Subscription;
  constructor(
    private store: Store,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.subscription = this.selectShoppingCart$.subscribe((shoppingCart) => {
      if (!!shoppingCart) {
        this.shoppingCart = shoppingCart;
      }
    });
  }

  addItem(product: Product): void {
    const newProduct: Product = JSON.parse(JSON.stringify(product));
    newProduct.qty = 1;
    this.shoppingCartService.addItemToCart(newProduct);
  }

  removeItem(product: Product): void {
    const newProduct: Product = JSON.parse(JSON.stringify(product));
    newProduct.qty = !product?.minQty
      ? 1
      : product.minQty < product.qty
      ? product.qty
      : product.minQty;
    this.shoppingCartService.removeItemFromCart(newProduct);
  }

  checkMaxQty(product: Product): boolean {
    return this.shoppingCartService.checkMaxQty(product);
  }

  checkMinQty(product: Product): boolean {
    return this.shoppingCartService.checkMinQty(product);
  }

  getTotal(product: Product): string {
    return (+product.price * product.qty).toFixed(2);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
