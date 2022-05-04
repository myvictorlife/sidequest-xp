/*
 * File: product.component.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 6:48:15 pm
 * Last Modified: Wednesday, 4th May 2022 5:37:10 pm
 * Copyright © 2022 Sidequest XP
 */

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setSelectedProductId } from '@sidequest-xp-store/product/actions/product.actions';
import { Product } from '@sidequest-xp-store/product/models/product.models';

@Component({
  selector: 'sidequest-xp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input()
  product: Product = {} as Product;

  constructor(private store: Store, private router: Router) {}

  redirectToProductDetails(productId: string) {
    this.store.dispatch(setSelectedProductId({ selectedProductId: productId }));
    this.router.navigate(['e-commerce/product-details']);
  }
}
