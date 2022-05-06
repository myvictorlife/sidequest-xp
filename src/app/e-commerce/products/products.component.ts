/*
 * File: products.component.ts
 * Project: sidequest-xp
 * Created: Thursday, 5th May 2022 6:56:28 am
 * Last Modified: Friday, 6th May 2022 6:01:52 pm
 * Copyright © 2022 Sidequest XP
 */

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromProduct from '@sidequest-xp-core/store/product/actions/product.actions';
import { Product } from '@sidequest-xp-store/models/product.models';
import { selectCurrentProductCategoryName } from '@sidequest-xp-store/product-category/selectors/product-category.selectors';
import { selectAllProducts } from '@sidequest-xp-store/product/selectors/product.selectors';

@Component({
  selector: 'sidequest-xp-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$ = this.store.select(selectAllProducts);
  categorySelected$ = this.store.select(selectCurrentProductCategoryName);
  categorySelected: string | null = null;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fromProduct.loadAllProducts());
    this.categorySelected$.subscribe((category) => {
      this.categorySelected = category;
    });
  }

  filterByCategory(product: Product) {
    if (!this.categorySelected) return true;
    return product.category.includes(this.categorySelected);
  }
}
