/*
 * File: shopping-cart.service.ts
 * Project: sidequest-xp
 * Created: Thursday, 5th May 2022 8:52:53 am
 * Last Modified: Thursday, 5th May 2022 4:39:04 pm
 * Copyright © 2022 Sidequest XP
 */

import { Injectable } from '@angular/core';
import { ShoppingCart } from '@sidequest-xp-store/cart/models/cart.model';
import { Product } from '@sidequest-xp-store/product/models/product.models';
import * as fromCart from '@sidequest-xp-core/store/cart/actions/cart.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class ShoppingCartService {
  constructor(private store: Store) {}

  addItemToCart(product: Product) {
    this.store.dispatch(fromCart.addItemToCart({ product }));
  }

  removeItemFromCart(product: Product) {
    this.store.dispatch(fromCart.removeItemFromCart({ product }));
  }

  addProduct(cart: ShoppingCart, product: Product) {
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
    cart.total += +product.price;
    cart.qty = cart.products.length;
    return cart;
  }

  removeProduct(cart: ShoppingCart, product: Product) {
    product = this.setProductConfig(cart, product);
    cart.total -= +product.price;
    cart.qty = cart.products.length;
    return cart;
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
