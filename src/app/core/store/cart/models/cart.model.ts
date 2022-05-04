/*
 * File: cart.model.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 10:08:20 pm
 * Last Modified: Wednesday, 4th May 2022 10:52:15 pm
 * Copyright © 2022 Sidequest XP
 */

import { Product } from '@sidequest-xp-store/product/models/product.models';

export interface ShoppingCart {
  cartId: string;
  products: Product[];
  qty: number;
  total: number;
}
