/*
 * File: shared.module.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 5:34:43 pm
 * Last Modified: Thursday, 5th May 2022 8:59:24 am
 * Copyright © 2022 Sidequest XP
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductService } from './product/product.service';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ProductService, ShoppingCartService],
})
export class SharedModule {}
