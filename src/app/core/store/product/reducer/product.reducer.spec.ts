/*
 * File: product.reducer.spec.ts
 * Project: sidequest-xp
 * Created: Monday, 9th May 2022 4:16:54 pm
 * Last Modified: Monday, 9th May 2022 4:24:01 pm
 * Copyright © 2022 Sidequest XP
 */

import * as fromProductReducer from './product.reducer';
import * as fromProductActions from '../actions/product.actions';
import { Product } from '@sidequest-xp-store/models/product.models';

describe('ProductReducer', () => {
  const initialState = fromProductReducer.initialState;
  it('should set the products on the store', () => {
    const action = fromProductActions.loadSuccess({
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
    });
    const state = fromProductReducer.reducer(initialState, action);

    expect(state.ids).toEqual(['2']);
  });

  it('should set product id', () => {
    const action = fromProductActions.setSelectedProductId({
      selectedProductId: '2',
    });
    const state = fromProductReducer.reducer(initialState, action);

    expect(state.selectedProductId).toEqual('2');
  });
});
