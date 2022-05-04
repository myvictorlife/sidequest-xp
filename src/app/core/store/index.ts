/*
 * File: index.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 8:20:40 am
 * Last Modified: Wednesday, 4th May 2022 5:41:33 pm
 * Copyright © 2022 Sidequest XP
 */

import { ActionReducerMap } from '@ngrx/store';

import { MetaReducer } from '@ngrx/store';
import { environment } from '@environment';

import * as fromProduct from './product/reducer/product.reducer';

export interface State {
  products: fromProduct.State;
}

export const reducers: ActionReducerMap<State> = {
  products: fromProduct.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
