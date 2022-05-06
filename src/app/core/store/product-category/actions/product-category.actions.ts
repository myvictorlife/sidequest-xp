/*
 * File: category.actions.ts
 * Project: sidequest-xp
 * Created: Friday, 6th May 2022 4:20:05 pm
 * Last Modified: Friday, 6th May 2022 5:28:25 pm
 * Copyright © 2022 Sidequest XP
 */

import { createAction, props } from '@ngrx/store';
import { ProductCategory } from '@sidequest-xp-store/models/product-category.models';

export const loadSuccess = createAction(
  '[Category] Load Success',
  props<{ productCategory: ProductCategory[] }>()
);

export const selectCategory = createAction(
  '[Product Category] Select',
  props<{ productCategory: ProductCategory }>()
);
