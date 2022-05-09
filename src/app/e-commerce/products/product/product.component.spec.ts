/*
 * File: product.component.spec.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 9:14:18 pm
 * Last Modified: Monday, 9th May 2022 2:39:06 pm
 * Copyright © 2022 Sidequest XP
 */

import { ProductComponent } from './product.component';
import {
  createComponentFactory,
  Spectator,
  SpyObject,
} from '@ngneat/spectator';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader,
} from '@ngx-translate/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '@sidequest-xp-shared/shared.module';
import { ShoppingCartService } from '@sidequest-xp-shared/shopping-cart/shopping-cart.service';
import { Product } from '@sidequest-xp-store/models/product.models';
import { Router } from '@angular/router';

describe('ProductComponent', () => {
  let spectator: Spectator<ProductComponent>;
  let shoppingCartService: SpyObject<ShoppingCartService>;
  let mockStore: SpyObject<MockStore>;
  let router: SpyObject<Router>;
  let initialState: any;

  const createComponent = createComponentFactory({
    component: ProductComponent,
    imports: [
      RouterTestingModule,
      MatCardModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: TranslateFakeLoader,
        },
      }),
      SharedModule,
    ],
    providers: [
      provideMockStore({
        initialState,
      }),
    ],
    declarations: [ProductComponent],
  });

  beforeEach(() => {
    spectator = createComponent();
    shoppingCartService = spectator.inject(ShoppingCartService);
    mockStore = spectator.inject(MockStore);
    router = spectator.inject(Router);
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('should add item', () => {
    const watcher = jest.spyOn(shoppingCartService, 'addItemToCart');
    const product = {
      id: '2',
      name: 'BIC Laranja',
      description: 'Caneta laranja',
      image: 'https://www.firmo.pt/resources/36756_t.JPG',
      price: '1.99',
      category: ['BIC'],
      qty: 2,
      minQty: 1,
    } as Product;
    spectator.component.addItem(product);
    expect(watcher).toHaveBeenCalledWith(product);
  });

  it('should redirect to product details', () => {
    const watcher = jest.spyOn(mockStore, 'dispatch');
    const spyRouter = jest.spyOn(router, 'navigate').mockImplementation();

    spectator.component.redirectToProductDetails('1');
    expect(watcher).toHaveBeenCalled();
    expect(spyRouter).toHaveBeenCalledWith(['e-commerce/product-details']);
  });
});
