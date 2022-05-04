/*
 * File: e-commerce-routing.module.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 6:47:07 pm
 * Last Modified: Wednesday, 4th May 2022 5:49:42 pm
 * Copyright © 2022 Sidequest XP
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: 'e-commerce',
    component: HomeComponent,
  },
  { path: 'e-commerce/product-details', component: ProductDetailsComponent },
  { path: 'e-commerce/cart', component: CartComponent },
  { path: '', redirectTo: 'e-commerce', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcommerceRoutingModule {}
