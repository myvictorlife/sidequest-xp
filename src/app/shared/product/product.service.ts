/*
 * File: product.service.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 5:18:12 pm
 * Last Modified: Friday, 6th May 2022 4:38:14 pm
 * Copyright © 2022 Sidequest XP
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { externalToolsUtils } from '@sidequest-xp-core/utils/external-tools';
import {
  ProductDataResponse,
  ProductResponse,
} from '../models/product-response.models';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  fetchAllProducts(): Observable<ProductDataResponse> {
    const url = externalToolsUtils.getProductsUrl();
    return this.http.get<ProductResponse>(url).pipe(
      map((response) => {
        return response?.data;
      })
    );
  }
}
