/*
 * File: product.actions.spec.ts
 * Project: sidequest-xp
 * Created: Monday, 9th May 2022 4:46:07 pm
 * Last Modified: Monday, 9th May 2022 4:49:21 pm
 * Copyright © 2022 Sidequest XP
 */

import { Product } from '@sidequest-xp-store/models/product.models';
import * as fromProductActions from './product.actions';
describe('ProductActions', () => {
  it('should load success', () => {
    const product = {
      id: '2',
      name: 'BIC Laranja',
      description: 'Caneta laranja',
      image: 'https://www.firmo.pt/resources/36756_t.JPG',
      price: '1.99',
      category: ['BIC'],
      qty: 2,
    } as Product;
    const action = fromProductActions.loadSuccess({ products: [product] });
    expect(action.type).toEqual(fromProductActions.loadSuccess.type);
    expect(action.products).toEqual([product]);
  });

  it('should select product by id', () => {
    const action = fromProductActions.setSelectedProductId({
      selectedProductId: '2',
    });
    expect(action.type).toEqual(fromProductActions.setSelectedProductId.type);
    expect(action.selectedProductId).toEqual('2');
  });
});
