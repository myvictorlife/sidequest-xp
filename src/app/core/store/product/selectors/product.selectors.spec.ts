/*
 * File: product.selectors.spec.ts
 * Project: sidequest-xp
 * Created: Monday, 9th May 2022 4:24:53 pm
 * Last Modified: Monday, 9th May 2022 4:50:14 pm
 * Copyright © 2022 Sidequest XP
 */

import { Product } from '@sidequest-xp-store/models/product.models';
import * as fromProductReducer from '../reducer/product.reducer';
import * as fromProductSelectors from './product.selectors';

describe('CartSelectors', () => {
  const product = {
    id: '2',
    name: 'BIC Laranja',
    description: 'Caneta laranja',
    image: 'https://www.firmo.pt/resources/36756_t.JPG',
    price: '1.99',
    category: ['BIC'],
    qty: 3,
  } as Product;

  const initialState: fromProductReducer.State = {
    ids: ['1'],
    entities: {
      1: product,
    },
    selectedProductId: '2',
  };
  it('should select the shopping cart state', () => {
    expect(
      fromProductSelectors.selectProductState.projector(initialState)
    ).toEqual(initialState);
  });

  it('should select product entities', () => {
    expect(
      fromProductSelectors.selectProductEntities.projector(initialState)
    ).toEqual(initialState.entities);
  });

  it('should select all products', () => {
    expect(
      fromProductSelectors.selectAllProducts.projector(initialState)
    ).toEqual([product]);
  });

  it('should select product total', () => {
    expect(
      fromProductSelectors.selectProductTotal.projector(initialState)
    ).toEqual(1);
  });

  it('should select current product id', () => {
    expect(
      fromProductSelectors.selectCurrentProductId.projector(initialState)
    ).toEqual('2');
  });

  it('should select current product', () => {
    const entities =
      fromProductSelectors.selectProductEntities.projector(initialState);
    expect(
      fromProductSelectors.selectCurrentProduct.projector(entities, '1')
    ).toEqual({
      id: '2',
      name: 'BIC Laranja',
      description: 'Caneta laranja',
      image: 'https://www.firmo.pt/resources/36756_t.JPG',
      price: '1.99',
      category: ['BIC'],
      qty: 3,
    } as Product);
  });
});
