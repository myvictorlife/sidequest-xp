/*
 * File: product-category.service.ts
 * Project: sidequest-xp
 * Created: Friday, 6th May 2022 5:24:42 pm
 * Last Modified: Monday, 9th May 2022 7:14:50 pm
 * Copyright © 2022 Sidequest XP
 */

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromProductCategory from '@sidequest-xp-core/store/product-category/actions/product-category.actions';
import { ProductCategory } from '@sidequest-xp-store/models/product-category.models';

@Injectable()
export class ProductCategoryService {
  constructor(private store: Store) {}

  selectCategory(productCategory: ProductCategory): void {
    this.store.dispatch(
      fromProductCategory.selectCategory({ productCategory })
    );
  }
}
