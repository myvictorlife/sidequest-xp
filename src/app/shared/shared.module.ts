/*
 * File: shared.module.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 5:34:43 pm
 * Last Modified: Tuesday, 3rd May 2022 6:23:53 pm
 * Copyright © 2022 Sidequest XP
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductService } from './product/product.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ProductService],
})
export class SharedModule {}
