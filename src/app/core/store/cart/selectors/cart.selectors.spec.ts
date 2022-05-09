/*
 * File: cart.selectors.spec.ts
 * Project: sidequest-xp
 * Created: Monday, 9th May 2022 3:40:39 pm
 * Last Modified: Monday, 9th May 2022 4:16:07 pm
 * Copyright © 2022 Sidequest XP
 */

import { Product } from '@sidequest-xp-store/models/product.models';
import * as fromCartReducer from '../reducer/cart.reducer';
import * as fromCartSelectors from './cart.selectors';

describe('CartSelectors', () => {
  const initialState: fromCartReducer.State = {
    ids: ['1'],
    entities: {
      1: {
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
      },
    },
    selectedShoppingCartId: '1',
  };

  it('should select the shopping cart state', () => {
    expect(
      fromCartSelectors.selectShoppingCartState.projector(initialState)
    ).toEqual(initialState);
  });

  it('should select shopping cart entities', () => {
    expect(
      fromCartSelectors.selectShoppingCartEntities.projector(initialState)
    ).toEqual(initialState.entities);
  });

  it('should select all shopping carts', () => {
    expect(
      fromCartSelectors.selectAllShoppingCarts.projector(initialState)
    ).toEqual([
      {
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
      },
    ]);
  });

  it('should select shopping cart total', () => {
    expect(
      fromCartSelectors.selectShoppingCartTotal.projector(initialState)
    ).toEqual(1);
  });

  it('should select current shopping cart id', () => {
    expect(
      fromCartSelectors.selectCurrentShoppingCartId.projector(initialState)
    ).toEqual('1');
  });

  it('should select current shopping cart', () => {
    const entities =
      fromCartSelectors.selectShoppingCartEntities.projector(initialState);
    const shoppingCartId =
      fromCartSelectors.selectCurrentShoppingCartId.projector(initialState);
    expect(
      fromCartSelectors.selectCurrentShoppingCart.projector(
        entities,
        shoppingCartId
      )
    ).toEqual({
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
    });
  });
  it('should select total of item', () => {
    const entities =
      fromCartSelectors.selectShoppingCartEntities.projector(initialState);
    const shoppingCartId =
      fromCartSelectors.selectCurrentShoppingCartId.projector(initialState);
    expect(
      fromCartSelectors.selectTotalOfItem.projector(entities, shoppingCartId)
    ).toEqual(1);
  });
});
