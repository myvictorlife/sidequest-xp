/*
 * File: shopping-cart.service.ts
 * Project: sidequest-xp
 * Created: Thursday, 5th May 2022 8:52:53 am
 * Last Modified: Thursday, 5th May 2022 9:18:18 am
 * Copyright © 2022 Sidequest XP
 */

import { Injectable } from '@angular/core';
import { ShoppingCart } from '@sidequest-xp-store/cart/models/cart.model';
import { Product } from '@sidequest-xp-store/product/models/product.models';

@Injectable()
export class ShoppingCartService {
  addProduct(cart: ShoppingCart, product: Product) {
    const products = cart.products.filter((prod) => prod.id === product.id);
    if (products.length) {
      cart.total += +product.price;
      cart.qty++;
    } else {
      cart.products.push(product);
      cart.total += +product.price;
      cart.qty++;
    }
    return cart;
  }

  removeProduct(cart: ShoppingCart, product: Product) {
    const products = cart.products.filter((prod) => prod.id === product.id);
    if (products.length) {
      cart.total += +product.price;
      cart.qty--;
    } else {
      cart.products.push(product);
      cart.total -= +product.price;
      cart.qty--;
    }
    return cart;
  }

  createShoppingCart(): ShoppingCart {
    return {
      cartId: '1',
      products: [],
      qty: 0,
      total: 0,
    } as ShoppingCart;
  }
}
