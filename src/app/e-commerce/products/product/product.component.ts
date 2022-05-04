/*
 * File: product.component.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 6:48:15 pm
 * Last Modified: Tuesday, 3rd May 2022 9:38:26 pm
 * Copyright © 2022 Sidequest XP
 */

import { Component, Input } from '@angular/core';
import { Product } from '@sidequest-xp-store/product/models/product.models';

@Component({
  selector: 'sidequest-xp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input()
  product: Product = {} as Product;
}
