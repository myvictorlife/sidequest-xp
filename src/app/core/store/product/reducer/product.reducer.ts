/*
 * File: product.reducer.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 8:12:16 am
 * Last Modified: Thursday, 5th May 2022 7:11:19 am
 * Copyright © 2022 Sidequest XP
 */

import { createReducer, on } from '@ngrx/store';
import { loadSuccess, setSelectedProductId } from '../actions/product.actions';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Product } from '../models/product.models';

export interface State extends EntityState<Product> {
  // additional entities state properties
  selectedProductId: string | null;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedProductId: null,
});

export const reducer = createReducer(
  initialState,
  on(loadSuccess, (state, { products }) => adapter.addMany(products, state)),
  on(setSelectedProductId, (state, { selectedProductId }) => ({
    ...state,
    selectedProductId,
  }))
);

export const getSelectedProductId = (state: State) => state.selectedProductId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

// select the array of product ids
export const selectProductIds = selectIds;

// select the dictionary of product entities
export const selectProductEntities = selectEntities;

// select the array of products
export const selectAllProducts = selectAll;

// select the total product count
export const selectProductTotal = selectTotal;
