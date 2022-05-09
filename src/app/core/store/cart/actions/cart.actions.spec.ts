/*
 * File: cart.actions.spec.ts
 * Project: sidequest-xp
 * Created: Monday, 9th May 2022 3:34:15 pm
 * Last Modified: Monday, 9th May 2022 3:39:26 pm
 * Copyright © 2022 Sidequest XP
 */

import { ShoppingCart } from '@sidequest-xp-store/models/cart.model';
import { Product } from '@sidequest-xp-store/models/product.models';
import * as fromCartActions from './cart.actions';
describe('CartActions', () => {
  it('should add item to cart', () => {
    const product = {
      id: '2',
      name: 'BIC Laranja',
      description: 'Caneta laranja',
      image: 'https://www.firmo.pt/resources/36756_t.JPG',
      price: '1.99',
      category: ['BIC'],
      qty: 2,
    } as Product;
    const action = fromCartActions.addItemToCart({ product });
    expect(action.type).toEqual(fromCartActions.addItemToCart.type);
    expect(action.product).toEqual(product);
  });

  it('should remove item from cart', () => {
    const product = {
      id: '2',
      name: 'BIC Laranja',
      description: 'Caneta laranja',
      image: 'https://www.firmo.pt/resources/36756_t.JPG',
      price: '1.99',
      category: ['BIC'],
      qty: 2,
    } as Product;
    const action = fromCartActions.removeItemFromCart({ product });
    expect(action.type).toEqual(fromCartActions.removeItemFromCart.type);
    expect(action.product).toEqual(product);
  });

  it('should add or remove shopping cart', () => {
    const shoppingCart = {
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
    const action = fromCartActions.addOrUpdateShoppingCart({ shoppingCart });
    expect(action.type).toEqual(fromCartActions.addOrUpdateShoppingCart.type);
    expect(action.shoppingCart).toEqual(shoppingCart);
  });
});
