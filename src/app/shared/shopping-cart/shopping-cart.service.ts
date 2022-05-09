/*
 * File: shopping-cart.service.ts
 * Project: sidequest-xp
 * Created: Thursday, 5th May 2022 8:52:53 am
 * Last Modified: Monday, 9th May 2022 8:47:22 am
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
    if (!products.length) {
      product.qty = this.getQty(product);
      cart.products.push(product);
    } else {
      products[0].qty += product.qty;
    }
    cart.qty = cart.products.length;
    cart.total = this.calculateTotal(cart);
    return cart;
  }

  getQty(product: Product) {
    if (product?.minQty) {
      return product.qty >= product.minQty ? product.qty : product.minQty;
    }
    return product.qty;
  }

  removeProduct(cart: ShoppingCart, product: Product): ShoppingCart {
    this.configProductToCart(cart, product);
    cart.total = this.calculateTotal(cart);
    cart.qty = cart.products.length;
    return cart;
  }

  calculateTotal(cart: ShoppingCart): number {
    const total = cart.products.reduce(function (acc, product) {
      return acc + +product.price * product.qty;
    }, 0);
    return +total.toFixed(2);
  }

  configProductToCart(cart: ShoppingCart, product: Product): void {
    const products = cart.products.filter((prod) => prod.id === product.id);
    if (products.length) {
      const qty = products[0].qty - product.qty;
      if (qty < 1) {
        cart.products = cart.products.filter((prod) => prod.id !== product.id);
      } else {
        products[0].qty = qty;
      }
    }
  }

  createShoppingCart(): ShoppingCart {
    return {
      cartId: '1',
      products: [],
      qty: 0,
      total: 0,
    } as ShoppingCart;
  }

  checkMaxQty(product: Product): boolean {
    const maxQty = product?.maxQty ?? 999;
    return product.qty >= maxQty;
  }

  checkMinQty(product: Product): boolean {
    const minQty = product?.minQty ?? 1;
    return product.qty > minQty;
  }
}
