/*
 * File: category.reducer.ts
 * Project: sidequest-xp
 * Created: Friday, 6th May 2022 4:22:14 pm
 * Last Modified: Monday, 9th May 2022 7:05:01 pm
 * Copyright © 2022 Sidequest XP
 */

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ProductCategory } from '@sidequest-xp-store/models/product-category.models';
import * as fromCategory from '@sidequest-xp-store/product-category/actions/product-category.actions';
import { createReducer, on } from '@ngrx/store';

export interface State extends EntityState<ProductCategory> {
  selectedProductCategoryName: string | null;
}

export function selectProductCategoryId(a: ProductCategory): string {
  return a.name;
}

export const adapter: EntityAdapter<ProductCategory> =
  createEntityAdapter<ProductCategory>({
    selectId: selectProductCategoryId,
  });

export const initialState: State = adapter.getInitialState({
  selectedProductCategoryName: null,
});

export const reducer = createReducer(
  initialState,
  on(fromCategory.loadSuccess, (state, { productCategory }) =>
    adapter.addMany(productCategory, state)
  ),
  on(fromCategory.selectCategory, (state, { productCategory }) => ({
    ...state,
    selectedProductCategoryName: productCategory.name,
  }))
);

export const getSelectedProductCategoryName = (state: State) =>
  state.selectedProductCategoryName;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

// select the array of product category ids
export const selectProductCategoryIds = selectIds;

// select the dictionary of product category entities
export const selectProductCategoryEntities = selectEntities;

// select the array of products category
export const selectAllProductCategories = selectAll;

// select the total product category count
export const selectProductCategoryTotal = selectTotal;
