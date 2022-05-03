/*
 * File: e-commerce-routing.module.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 6:47:07 pm
 * Last Modified: Tuesday, 3rd May 2022 7:05:08 pm
 * Copyright © 2022 Sidequest XP
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
    { path: '',   redirectTo: 'e-commerce', pathMatch: 'full' },
    { path: 'e-commerce', component: HomeComponent },
    { path: 'product', component: ProductComponent },
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcommerceRoutingModule {}
