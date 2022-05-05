/*
 * File: product.model.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 8:08:15 am
 * Last Modified: Thursday, 5th May 2022 1:19:23 pm
 * Copyright © 2022 Sidequest XP
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  imageCollection: string[];
  image: string;
  price: string;
  minQty: number;
  maxQty: number;
  qty: number;
}
