/*
 * File: e-commerce.module.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 6:43:58 pm
 * Last Modified: Tuesday, 3rd May 2022 10:12:12 pm
 * Copyright © 2022 Sidequest XP
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { EcommerceRoutingModule } from './e-commerce.routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../components/components.module';
import { ProductsComponent } from './products/products.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [HomeComponent, ProductComponent, ProductsComponent],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    TranslateModule.forChild(),
    ComponentsModule,
    FlexLayoutModule,
    MatCardModule,
  ],
})
export class ECommerceModule {}
