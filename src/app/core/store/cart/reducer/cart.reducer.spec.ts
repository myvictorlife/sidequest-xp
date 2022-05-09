/*
 * File: cart.reducer.spec.ts
 * Project: sidequest-xp
 * Created: Monday, 9th May 2022 3:19:03 pm
 * Last Modified: Monday, 9th May 2022 4:21:50 pm
 * Copyright © 2022 Sidequest XP
 */

import * as fromCartReducer from './cart.reducer';
import * as fromCartActions from '../actions/cart.actions';
import { Product } from '@sidequest-xp-store/models/product.models';
import { ShoppingCart } from '@sidequest-xp-store/models/cart.model';

describe('CartReducer', () => {
  const initialState = fromCartReducer.initialState;
  it('should set the cart on the store', () => {
    const shoppingCart = {
      cartId: '1',
      products: [
        {
          id: '2',
          name: 'BIC Laranja',
          description: 'Caneta laranja',
          image: 'https:/o/www.firmo.pt/resources/36756_t.JPG',
          price: '1.99',
          category: ['BIC'],
          qty: 3,
        } as Product,
      ],
      qty: 1,
      total: 5.97,
    } as ShoppingCart;
    const action = fromCartActions.addOrUpdateShoppingCart({
      shoppingCart,
    });
    const state = fromCartReducer.reducer(initialState, action);

    expect(state.selectedShoppingCartId).toEqual('1');
  });
});
