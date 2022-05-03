/*
 * File: product.action.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 8:10:11 am
 * Last Modified: Tuesday, 3rd May 2022 8:18:03 am
 * Copyright © 2022 Sidequest XP
 */
import { createAction, props } from '@ngrx/store';
import { Product } from './product.models';

export const loadSuccess = createAction(
    '[Product] Load Success',
    props<{products: Product[]}>()
);
