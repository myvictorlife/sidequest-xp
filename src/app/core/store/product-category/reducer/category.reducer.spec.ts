/*
 * File: category.reducer.spec.ts
 * Project: sidequest-xp
 * Created: Monday, 9th May 2022 7:19:45 pm
 * Last Modified: Monday, 9th May 2022 7:26:56 pm
 * Copyright © 2022 Sidequest XP
 */
import * as fromCategoryReducer from './category.reducer';
import * as fromCategoryActions from '../actions/product-category.actions';
import { ProductCategory } from '@sidequest-xp-store/models/product-category.models';
describe('CategoryReducer', () => {
  const initialState = fromCategoryReducer.initialState;
  it('should set the category on the store', () => {
    const productCategory: ProductCategory = {
      id: '1',
      name: 'Unit Test',
    };
    const action = fromCategoryActions.loadSuccess({
      productCategory: [productCategory],
    });
    const state = fromCategoryReducer.reducer(initialState, action);

    expect(state.ids).toEqual(['Unit Test']);
  });

  it('should select category on the store', () => {
    const productCategory: ProductCategory = {
      id: '1',
      name: 'Unit Test',
    };
    const action = fromCategoryActions.selectCategory({ productCategory });
    const state = fromCategoryReducer.reducer(initialState, action);

    expect(state.selectedProductCategoryName).toEqual('Unit Test');
  });
});
