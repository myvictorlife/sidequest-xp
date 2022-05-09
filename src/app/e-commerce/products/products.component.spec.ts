/*
 * File: products.component.spec.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 7:18:04 pm
 * Last Modified: Monday, 9th May 2022 7:05:42 pm
 * Copyright © 2022 Sidequest XP
 */

import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';
import { SharedModule } from '@sidequest-xp-shared/shared.module';
import { selectCurrentProductCategoryName } from '@sidequest-xp-store/product-category/selectors/product-category.selectors';

describe('ProductsComponent', () => {
  let spectator: Spectator<ProductsComponent>;

  let initialState: any;

  const createComponent = createComponentFactory({
    component: ProductsComponent,
    imports: [SharedModule],
    providers: [
      provideMockStore({
        initialState,
        selectors: [
          { selector: selectCurrentProductCategoryName, value: 'Unit Test' },
        ],
      }),
    ],
    declarations: [ProductComponent],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  // it('should filter by category', () => {
  //   const product = {
  //     id: '2',
  //     name: 'BIC Laranja',
  //     description: 'Caneta laranja',
  //     image: 'https://www.firmo.pt/resources/36756_t.JPG',
  //     price: '1.99',
  //     category: ['BIC', 'Unit Test'],
  //     qty: 3,
  //   } as Product;
  //   const value = spectator.component.filterByCategory(product);
  //   expect(value).toBeTruthy();
  // });
});
