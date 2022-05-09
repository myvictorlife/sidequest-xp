/*
 * File: product-details.component.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 7:21:30 am
 * Last Modified: Monday, 9th May 2022 8:11:41 pm
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
    const newProduct: Product = JSON.parse(JSON.stringify(product));
    newProduct.qty = 1;
    this.productDetailsService.addItemToCart(newProduct);
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
