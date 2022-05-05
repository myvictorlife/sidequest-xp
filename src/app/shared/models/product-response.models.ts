/*
 * File: product-response.models.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 5:26:45 pm
 * Last Modified: Thursday, 5th May 2022 1:20:39 pm
 * Copyright © 2022 Sidequest XP
 */

import { Product } from '@sidequest-xp-store/product/models/product.models';

export interface ProductResponse {
  data: {
    products: Product[];
  };
}
