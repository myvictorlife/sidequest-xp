/*
 * File: product-details.component.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 7:21:30 am
 * Last Modified: Monday, 9th May 2022 5:36:45 pm
 * Copyright © 2022 Sidequest XP
 */

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from '@sidequest-xp-store/models/product.models';
import * as fromProduct from '@sidequest-xp-store/product/selectors/product.selectors';
import { Subscription } from 'rxjs';
import { ProductDetailsService } from './product-details.service';

@Component({
  selector: 'sidequest-xp-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  productSelected$ = this.store.select(fromProduct.selectCurrentProduct);
  product = {} as Product;
  subscription = {} as Subscription;
  constructor(
    private store: Store,
    private router: Router,
    private productDetailsService: ProductDetailsService
  ) {}

  ngOnInit(): void {
    this.checkIfTheProductExists();
  }

  checkIfTheProductExists() {
    this.subscription = this.productSelected$.subscribe((product) => {
        if (!product) {
          this.router.navigate(['e-commerce']);
        } else {
          this.product = product;
        }
      });
  }

  addItemToCart(product: Product): void {
    this.productDetailsService.addItemToCart(product);
  }

  removeItemToCart(product: Product): void {
    this.productDetailsService.removeItemFromCart(product);
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
