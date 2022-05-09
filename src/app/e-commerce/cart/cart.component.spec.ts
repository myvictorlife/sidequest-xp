/*
 * File: cart.component.spec.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 5:49:19 pm
 * Last Modified: Monday, 9th May 2022 5:24:46 pm
 * Copyright © 2022 Sidequest XP
 */

import { CartComponent } from './cart.component';

import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { ComponentsModule } from '@sidequest-xp-components/components.module';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader,
} from '@ngx-translate/core';
import { SharedModule } from '@sidequest-xp-shared/shared.module';
import { Product } from '@sidequest-xp-store/models/product.models';
import { ShoppingCart } from '@sidequest-xp-store/models/cart.model';
import { selectCurrentShoppingCart } from '@sidequest-xp-store/cart/selectors/cart.selectors';

describe('CartComponent', () => {
  let spectator: Spectator<CartComponent>;
  // let shoppingCartService: SpyObject<ShoppingCartService>;
  // let mockStore: SpyObject<MockStore>;

  const cart = {
    cartId: '1',
    products: [
      {
        id: '2',
        name: 'BIC Laranja',
        description: 'Caneta laranja',
        image: 'https://www.firmo.pt/resources/36756_t.JPG',
        price: '1.99',
        category: ['BIC'],
        qty: 3,
      } as Product,
    ],
    qty: 1,
    total: 5.97,
  } as ShoppingCart;

  const initialState: any = { entities: [] };

  const createComponent = createComponentFactory({
    component: CartComponent,
    imports: [
      RouterTestingModule,
      ComponentsModule,
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
        selectors: [
          {
            selector: selectCurrentShoppingCart,
            value: cart,
          },
        ],
      }),
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
    // shoppingCartService = spectator.inject(ShoppingCartService);
    // mockStore = spectator.inject(MockStore);
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  // it('should add item', () => {
  //   const watcher = jest.spyOn(shoppingCartService, 'addItemToCart');
  //   const product = {
  //     id: '2',
  //     name: 'BIC Laranja',
  //     description: 'Caneta laranja',
  //     image: 'https://www.firmo.pt/resources/36756_t.JPG',
  //     price: '1.99',
  //     category: ['BIC'],
  //     qty: 1,
  //     minQty: 1
  //   } as Product;
  //   spectator.component.addItem(product);
  //   expect(watcher).toHaveBeenCalledWith(product);
  // });

  // it('should remove item', () => {
  //   const watcher = jest.spyOn(shoppingCartService, 'removeItemFromCart');
  //   const product = {
  //     id: '2',
  //     name: 'BIC Laranja',
  //     description: 'Caneta laranja',
  //     image: 'https://www.firmo.pt/resources/36756_t.JPG',
  //     price: '1.99',
  //     category: ['BIC'],
  //     qty: 2,
  //     minQty: 1
  //   } as Product;
  //   spectator.component.removeItem(product);
  //   expect(watcher).toHaveBeenCalledWith(product);
  // });

  // it('should check max qty', () => {
  //   const watcher = jest.spyOn(shoppingCartService, 'checkMaxQty');
  //   const product = {
  //     id: '2',
  //     name: 'BIC Laranja',
  //     description: 'Caneta laranja',
  //     image: 'https://www.firmo.pt/resources/36756_t.JPG',
  //     price: '1.99',
  //     category: ['BIC'],
  //     qty: 2,
  //     minQty: 1
  //   } as Product;
  //   const value = spectator.component.checkMaxQty(product);
  //   expect(value).toBeFalsy();
  //   expect(watcher).toHaveBeenCalledWith(product);
  // });
});
