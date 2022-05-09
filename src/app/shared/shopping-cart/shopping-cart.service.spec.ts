/*
 * File: shopping-cart.service.spec.ts
 * Project: sidequest-xp
 * Created: Monday, 9th May 2022 5:26:45 am
 * Last Modified: Monday, 9th May 2022 7:18:45 am
 * Copyright © 2022 Sidequest XP
 */

import {
  createServiceFactory,
  SpectatorService,
  SpyObject,
} from '@ngneat/spectator';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ShoppingCartService } from './shopping-cart.service';

import * as fromCart from '@sidequest-xp-core/store/cart/actions/cart.actions';
import { Product } from '@sidequest-xp-store/models/product.models';
import { ShoppingCart } from '@sidequest-xp-store/models/cart.model';

describe('ShoppingCartService', () => {
  let spectator: SpectatorService<ShoppingCartService>;
  let mockStore: SpyObject<MockStore>;
  let initialState: any;

  const createService = createServiceFactory({
    service: ShoppingCartService,
    imports: [],
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
    const product = { id: '1' } as Product;
    const watcher = jest.spyOn(mockStore, 'dispatch');
    spectator.service.addItemToCart(product);
    expect(watcher).toHaveBeenCalledWith(fromCart.addItemToCart({ product }));
  });
  it('should remove item from cart', () => {
    const product = { id: '1' } as Product;
    const watcher = jest.spyOn(mockStore, 'dispatch');
    spectator.service.removeItemFromCart(product);
    expect(watcher).toHaveBeenCalledWith(
      fromCart.removeItemFromCart({ product })
    );
  });

  it('should add product to cart', () => {
    const product = {
      id: '1',
      name: 'BIC Cristal',
      description: 'Caneta bic cristal',
      image: 'https://www.firmo.pt/resources/36760_t.JPG',
      imageCollection: [
        'https://m.media-amazon.com/images/I/51lbMljGVrL._AC_SX522_.jpg',
        'https://m.media-amazon.com/images/I/61T-JJmkREL._AC_SL1000_.jpg',
        'https://m.media-amazon.com/images/I/71h1hk2QvLL._AC_SX425_.jpg',
      ],
      price: '2.99',
      category: ['BIC'],
      qty: 2,
      minQty: 2,
      maxQty: 5,
    } as Product;

    const cart = spectator.service.createShoppingCart();
    const newCart = spectator.service.addProduct(cart, product);
    expect(newCart.products.length).toEqual(1);
    expect(newCart.total).toEqual(5.98);
  });

  it('should add two product to cart', () => {
    const product1 = {
      id: '1',
      name: 'BIC Cristal',
      description: 'Caneta bic cristal',
      image: 'https://www.firmo.pt/resources/36760_t.JPG',
      imageCollection: [
        'https://m.media-amazon.com/images/I/51lbMljGVrL._AC_SX522_.jpg',
        'https://m.media-amazon.com/images/I/61T-JJmkREL._AC_SL1000_.jpg',
        'https://m.media-amazon.com/images/I/71h1hk2QvLL._AC_SX425_.jpg',
      ],
      price: '2.99',
      category: ['BIC'],
      qty: 2,
      minQty: 2,
      maxQty: 5,
    } as Product;

    const cart = spectator.service.createShoppingCart();
    const newCart = spectator.service.addProduct(cart, product1);

    const product2 = {
      id: '2',
      name: 'BIC Laranja',
      description: 'Caneta laranja',
      image: 'https://www.firmo.pt/resources/36756_t.JPG',
      price: '1.99',
      category: ['BIC'],
      qty: 3,
    } as Product;
    const newCart2 = spectator.service.addProduct(newCart, product2);
    expect(newCart2.products.length).toEqual(2);
    expect(newCart2.total).toEqual(11.95);
  });

  it('should remove product from cart', () => {
    const product1 = {
      id: '2',
      name: 'BIC Laranja',
      description: 'Caneta laranja',
      image: 'https://www.firmo.pt/resources/36756_t.JPG',
      price: '1.99',
      category: ['BIC'],
      qty: 3,
    } as Product;

    const cart = {
      cartId: '1',
      products: [product1],
      qty: 1,
      total: 5.97,
    } as ShoppingCart;
    const newCart = spectator.service.removeProduct(cart, product1);

    expect(newCart.products.length).toEqual(0);
    expect(newCart.total).toEqual(0);
  });

  it('should decrease product from cart', () => {
    const product = {
      id: '2',
      name: 'BIC Laranja',
      description: 'Caneta laranja',
      image: 'https://www.firmo.pt/resources/36756_t.JPG',
      price: '1.99',
      category: ['BIC'],
      qty: 2,
    } as Product;

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
    const newCart = spectator.service.removeProduct(cart, product);

    expect(newCart.products.length).toEqual(1);
    expect(newCart.total).toEqual(1.99);
  });

  it('should check max qty to be false', () => {
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
    const value = spectator.service.checkMaxQty(product);
    expect(value).toBeFalsy();
  });

  it('should check max qty to be true', () => {
    const product = {
      id: '2',
      name: 'BIC Laranja',
      description: 'Caneta laranja',
      image: 'https://www.firmo.pt/resources/36756_t.JPG',
      price: '1.99',
      category: ['BIC'],
      qty: 4,
      maxQty: 3,
    } as Product;
    const value = spectator.service.checkMaxQty(product);
    expect(value).toBeTruthy();
  });
  it('should check max qty with no maxQty to be false', () => {
    const product = {
      id: '2',
      name: 'BIC Laranja',
      description: 'Caneta laranja',
      image: 'https://www.firmo.pt/resources/36756_t.JPG',
      price: '1.99',
      category: ['BIC'],
      qty: 2,
    } as Product;
    const value = spectator.service.checkMaxQty(product);
    expect(value).toBeFalsy();
  });

  it('should check min qty to be true', () => {
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
    const value = spectator.service.checkMinQty(product);
    expect(value).toBeTruthy();
  });

  it('should check min qty to be true v2', () => {
    const product = {
      id: '2',
      name: 'BIC Laranja',
      description: 'Caneta laranja',
      image: 'https://www.firmo.pt/resources/36756_t.JPG',
      price: '1.99',
      category: ['BIC'],
      qty: 2,
    } as Product;
    const value = spectator.service.checkMinQty(product);
    expect(value).toBeTruthy();
  });

  it('should check min qty with minQty to be false', () => {
    const product = {
      id: '2',
      name: 'BIC Laranja',
      description: 'Caneta laranja',
      image: 'https://www.firmo.pt/resources/36756_t.JPG',
      price: '1.99',
      category: ['BIC'],
      qty: 1,
      minQty: 2,
    } as Product;
    const value = spectator.service.checkMinQty(product);
    expect(value).toBeFalsy();
  });
});
