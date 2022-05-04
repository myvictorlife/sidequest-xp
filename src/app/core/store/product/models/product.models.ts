/*
 * File: product.model.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 8:08:15 am
 * Last Modified: Wednesday, 4th May 2022 8:27:59 pm
 * Copyright © 2022 Sidequest XP
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  imageCollection: string[];
  image: string;
  price: string;
}
