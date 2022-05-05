/*
 * File: cart.component.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 5:49:19 pm
 * Last Modified: Thursday, 5th May 2022 9:11:43 am
 * Copyright © 2022 Sidequest XP
 */

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShoppingCart } from '@sidequest-xp-store/cart/models/cart.model';
import { selectCurrentShoppingCart } from '@sidequest-xp-store/cart/selectors/cart.selectors';
import { Product } from '@sidequest-xp-store/product/models/product.models';
import { CartService } from './cart.service';

@Component({
  selector: 'sidequest-xp-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  selectShoppingCart$ = this.store.select(selectCurrentShoppingCart);
  shoppingCart: ShoppingCart | undefined;
  constructor(private store: Store, private cartService: CartService) {}

  ngOnInit(): void {
    this.selectShoppingCart$.subscribe((shoppingCart) => {
      if (!!shoppingCart) {
        this.shoppingCart = shoppingCart;
      }
    });
  }

  addItem(product: Product) {
    this.cartService.addItemToCart(product);
  }

  removeItem(product: Product) {
    this.cartService.removeItemFromCart(product);
  }
}
