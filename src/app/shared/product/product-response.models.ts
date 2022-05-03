/*
 * File: product-response.models.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 5:26:45 pm
 * Last Modified: Tuesday, 3rd May 2022 6:24:36 pm
 * Copyright © 2022 Sidequest XP
 */

export interface ProductResponse {
  data: {
    products: Product[];
  };
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
}
