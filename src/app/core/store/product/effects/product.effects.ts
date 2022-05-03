/*
 * File: product.effects.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 6:37:11 pm
 * Last Modified: Tuesday, 3rd May 2022 8:06:28 pm
 * Copyright © 2022 Sidequest XP
 */

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductService } from '@sidequest-xp-shared/product/product.service';
import * as fromProduct from '@sidequest-xp-core/store/product/actions/product.actions';

@Injectable()
export class ProductEffects {
  loadAllProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProduct.loadAllProducts),
      mergeMap(() =>
        this.productService.fetchAllProducts().pipe(
          map((products) => fromProduct.loadSuccess({ products })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
