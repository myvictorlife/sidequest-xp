/*
 * File: shopping-cart.service.ts
 * Project: sidequest-xp
 * Created: Thursday, 5th May 2022 8:52:53 am
 * Last Modified: Sunday, 8th May 2022 12:10:17 pm
 * Copyright © 2022 Sidequest XP
 */

import { Injectable } from '@angular/core';
import { ShoppingCart } from '@sidequest-xp-store/models/cart.model';
import { Product } from '@sidequest-xp-store/models/product.models';
import * as fromCart from '@sidequest-xp-core/store/cart/actions/cart.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class ShoppingCartService {
  constructor(private store: Store) {}

  addItemToCart(product: Product): void {
    this.store.dispatch(fromCart.addItemToCart({ product }));
  }

  removeItemFromCart(product: Product): void {
    this.store.dispatch(fromCart.removeItemFromCart({ product }));
  }

  addProduct(cart: ShoppingCart, product: Product): ShoppingCart {
    const products = cart.products.filter((prod) => prod.id === product.id);
    if (!products?.length) {
      cart.products.push(product);
    } else {
      products[0].qty++;
    }
    product.qty = product?.qty
      ? product.qty
      : product.minQty
      ? product.minQty
      : 1;
    cart.qty = cart.products.length;
    cart.total = this.calculateTotal(cart);
    return cart;
  }

  removeProduct(cart: ShoppingCart, product: Product): ShoppingCart {
    product = this.setProductConfig(cart, product);
    cart.total = this.calculateTotal(cart);
    cart.qty = cart.products.length;
    return cart;
  }

  calculateTotal(cart: ShoppingCart): number {
    const total = cart.products.reduce(function(acc, product) { return acc + (+product.price * product.qty) }, 0);
    return +total.toFixed(2);
  }

  setProductConfig(cart: ShoppingCart, product: Product): Product {
    const products = cart.products.filter((prod) => prod.id === product.id);
    if (products?.length) {
      if (products[0].qty <= 1) {
        cart.products = cart.products.filter((prod) => prod.id !== product.id);
      } else {
        products[0].qty--;
      }
    }
    return product;
  }

  createShoppingCart(): ShoppingCart {
    return {
      cartId: '1',
      products: [],
      qty: 0,
      total: 0,
    } as ShoppingCart;
  }

  checkMaxQty(product: Product) {
    const maxQty = product?.maxQty ?? 999;
    return product.qty >= maxQty;
  }

  checkMinQty(product: Product) {
    const minQty = product?.minQty ?? 1;
    return product.qty < minQty;
  }
}
