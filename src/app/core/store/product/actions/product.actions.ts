/*
 * File: product.action.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 8:10:11 am
 * Last Modified: Friday, 6th May 2022 4:11:59 pm
 * Copyright © 2022 Sidequest XP
 */
import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.models';

export const loadAllProducts = createAction('[Product] Load Products');

export const loadSuccess = createAction(
  '[Product] Load Success',
  props<{ products: Product[] }>()
);

export const setSelectedProductId = createAction(
  '[Product] Set Selected Product Id',
  props<{ selectedProductId: string }>()
);
