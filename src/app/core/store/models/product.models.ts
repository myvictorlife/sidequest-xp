/*
 * File: product.model.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 8:08:15 am
 * Last Modified: Friday, 6th May 2022 5:46:19 pm
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
  category: string[];
}
