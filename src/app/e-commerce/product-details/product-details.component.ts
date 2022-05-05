/*
 * File: product-details.component.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 7:21:30 am
 * Last Modified: Thursday, 5th May 2022 8:51:42 am
 * Copyright © 2022 Sidequest XP
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from '@sidequest-xp-store/product/models/product.models';
import { selectCurrentProduct } from '@sidequest-xp-store/product/selectors/product.selectors';
import { ProductDetailsService } from './product-details.service';

@Component({
  selector: 'sidequest-xp-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productSelected$ = this.store.select(selectCurrentProduct);
  product = {} as Product;
  constructor(
    private store: Store,
    private router: Router,
    private productDetailsService: ProductDetailsService
  ) {}

  ngOnInit(): void {
    this.checkIfTheProductExists();
  }

  checkIfTheProductExists() {
    this.productSelected$.subscribe((product) => {
      if (!product) {
        this.router.navigate(['e-commerce']);
      } else {
        this.product = product;
      }
    });
  }

  addItemToCart(product: Product) {
    this.productDetailsService.addItemToCart(product);
  }

  removeItemToCart(product: Product) {
    this.productDetailsService.removeItemFromCart(product);
  }

  // ngOnDestroy(): void {
  //   this.subscriptions.unsubscribe();
  // }
}
