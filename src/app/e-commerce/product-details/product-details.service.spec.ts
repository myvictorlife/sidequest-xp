/*
 * File: product-details.service.spec.ts
 * Project: sidequest-xp
 * Created: Monday, 9th May 2022 7:06:27 pm
 * Last Modified: Monday, 9th May 2022 7:10:45 pm
 * Copyright © 2022 Sidequest XP
 */

import {
  createServiceFactory,
  SpectatorService,
  SpyObject,
} from '@ngneat/spectator';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ProductDetailsService } from './product-details.service';

/*
 * File: product-details.service.spec.ts
 * Project: sidequest-xp
 * Created: Monday, 9th May 2022 7:06:27 pm
 * Last Modified: Monday, 9th May 2022 7:06:30 pm
 * Copyright © 2022 Sidequest XP
 */

import * as fromCart from '@sidequest-xp-core/store/cart/actions/cart.actions';
import { Product } from '@sidequest-xp-store/models/product.models';
describe('ProductDetailsService', () => {
  let spectator: SpectatorService<ProductDetailsService>;
  let mockStore: SpyObject<MockStore>;
  const initialState: any = {};

  const createService = createServiceFactory({
    service: ProductDetailsService,
    providers: [
      provideMockStore({
        initialState,
      }),
    ],
  });

  beforeEach(() => {
    spectator = createService();
    mockStore = spectator.inject(MockStore);
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('should add item to cart', () => {
    const product = {
      id: '2',
      name: 'BIC Laranja',
      description: 'Caneta laranja',
      image: 'https://www.firmo.pt/resources/36756_t.JPG',
      price: '1.99',
      category: ['BIC', 'Unit Test'],
      qty: 3,
    } as Product;
    const watcher = jest.spyOn(mockStore, 'dispatch');
    spectator.service.addItemToCart(product);
    expect(watcher).toHaveBeenCalledWith(fromCart.addItemToCart({ product }));
  });

  it('should remove item to cart', () => {
    const product = {
      id: '2',
      name: 'BIC Laranja',
      description: 'Caneta laranja',
      image: 'https://www.firmo.pt/resources/36756_t.JPG',
      price: '1.99',
      category: ['BIC', 'Unit Test'],
      qty: 3,
    } as Product;
    const watcher = jest.spyOn(mockStore, 'dispatch');
    spectator.service.removeItemFromCart(product);
    expect(watcher).toHaveBeenCalledWith(
      fromCart.removeItemFromCart({ product })
    );
  });
});
