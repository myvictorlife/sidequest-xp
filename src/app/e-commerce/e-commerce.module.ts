/*
 * File: e-commerce.module.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 6:43:58 pm
 * Last Modified: Wednesday, 4th May 2022 9:34:01 pm
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
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductDetailsComponent,
    ProductsComponent,
    ProductComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    TranslateModule.forChild(),
    ComponentsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class ECommerceModule {}
