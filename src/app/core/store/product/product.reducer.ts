/*
 * File: product.reducer.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 8:12:16 am
 * Last Modified: Tuesday, 3rd May 2022 8:22:47 am
 * Copyright © 2022 Sidequest XP
 */

import { createReducer, on } from '@ngrx/store';
import { loadSuccess } from './product.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Product } from './product.models';

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
);

export const getSelectedProductId = (state: State) => state.selectedProductId;

// get the selectors
const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = adapter.getSelectors();

// select the array of user ids
export const selectProductIds = selectIds;
 
// select the dictionary of user entities
export const selectProductEntities = selectEntities;
 
// select the array of users
export const selectAllProducts = selectAll;
 
// select the total user count
export const selectProductTotal = selectTotal;