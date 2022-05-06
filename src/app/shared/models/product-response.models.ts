/*
 * File: product-response.models.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 5:26:45 pm
 * Last Modified: Friday, 6th May 2022 4:25:55 pm
 * Copyright © 2022 Sidequest XP
 */

import { ProductCategory } from '@sidequest-xp-store/models/product-category.models';
import { Product } from '@sidequest-xp-store/models/product.models';

export interface ProductResponse {
  data: ProductDataResponse;
}

export interface ProductDataResponse {
  category: ProductCategory[];
  products: Product[];
}
