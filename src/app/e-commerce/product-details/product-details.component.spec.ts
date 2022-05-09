/*
 * File: product-details.component.spec.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 8:12:27 am
 * Last Modified: Monday, 9th May 2022 5:23:35 pm
 * Copyright © 2022 Sidequest XP
 */

import { ProductDetailsComponent } from './product-details.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentsModule } from '@sidequest-xp-components/components.module';
import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader,
} from '@ngx-translate/core';
import { ProductDetailsService } from './product-details.service';
import { Product } from '@sidequest-xp-store/models/product.models';
import * as fromProduct from '@sidequest-xp-store/product/selectors/product.selectors';

import * as fromProductReducer from '@sidequest-xp-store/product/reducer/product.reducer';

describe('ProductDetailsComponent', () => {
  let spectator: Spectator<ProductDetailsComponent>;
  // let productDetailsService: ProductDetailsService;
  // let mockStore: SpyObject<MockStore>;
  const product = {
    id: '2',
    name: 'BIC Laranja',
    description: 'Caneta laranja',
    image: 'https://www.firmo.pt/resources/36756_t.JPG',
    price: '1.99',
    category: ['BIC'],
    qty: 2,
    maxQty: 3,
  } as Product;

  const initialState: fromProductReducer.State = {
    ids: ['1'],
    entities: {
      1: product,
    },
    selectedProductId: '2',
  };

  const createComponent = createComponentFactory({
    component: ProductDetailsComponent,
    imports: [
      RouterTestingModule,
      ComponentsModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: TranslateFakeLoader,
        },
      }),
    ],
    providers: [
      ProductDetailsService,
      provideMockStore({
        initialState,
        selectors: [
          {
            selector: fromProduct.selectCurrentProduct,
            value: {
              id: '2',
              name: 'BIC Laranja',
              description: 'Caneta laranja',
              image: 'https://www.firmo.pt/resources/36756_t.JPG',
              price: '1.99',
              category: ['BIC'],
              qty: 3,
            } as Product,
          },
        ],
      }),
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
    // productDetailsService = spectator.inject(ProductDetailsService);
    // mockStore = spectator.inject(MockStore);
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  // it('should add item to cart', () => {
  //   const prod = JSON.parse(JSON.stringify(product));
  //   const value = fromProductReducer.initialState;
  //   console.log(value)
  //   const watcher = jest.spyOn(productDetailsService, 'addItemToCart').mockImplementation();
  //   spectator.component.addItemToCart(prod);
  //   expect(watcher).toHaveBeenCalledWith(prod);
  // });
});
