/*
 * File: e-commerce.module.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 6:43:58 pm
 * Last Modified: Friday, 6th May 2022 5:29:06 pm
 * Copyright © 2022 Sidequest XP
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product/product.component';
import { EcommerceRoutingModule } from './e-commerce.routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../components/components.module';
import { ProductsComponent } from './products/products.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsService } from './product-details/product-details.service';
import { SharedModule } from '@sidequest-xp-shared/shared.module';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductCategoryService } from './product-category/product-category.service';

@NgModule({
  declarations: [
    HomeComponent,
    ProductDetailsComponent,
    ProductsComponent,
    ProductComponent,
    CartComponent,
    ProductCategoryComponent,
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    TranslateModule.forChild(),
    ComponentsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    SharedModule,
  ],
  providers: [ProductDetailsService, ProductCategoryService],
})
export class ECommerceModule {}
