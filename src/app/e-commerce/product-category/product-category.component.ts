import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductCategory } from '@sidequest-xp-store/models/product-category.models';
import { selectAllProductCategories } from '@sidequest-xp-store/product-category/selectors/product-category.selectors';
import { ProductCategoryService } from './product-category.service';

@Component({
  selector: 'sidequest-xp-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss'],
})
export class ProductCategoryComponent {
  categories$ = this.store.select(selectAllProductCategories);
  constructor(
    private store: Store,
    private productCategoryService: ProductCategoryService
  ) {}

  selectCategory(productCategory: ProductCategory) {
    this.productCategoryService.selectCategory(productCategory);
  }
}
