/*
 * File: shared.module.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 5:34:43 pm
 * Last Modified: Monday, 9th May 2022 6:17:57 pm
 * Copyright © 2022 Sidequest XP
 */

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ProductService } from './product/product.service';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, TranslateModule],
  providers: [ProductService, ShoppingCartService],
  exports: [CommonModule, TranslateModule],
})
export class SharedModule {}

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
