/*
 * File: app-routing.module.ts
 * Project: sidequest-xp
 * Created: Monday, 2nd May 2022 11:17:29 pm
 * Last Modified: Tuesday, 3rd May 2022 7:05:35 pm
 * Copyright © 2022 Sidequest XP
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'sidequest-xp', pathMatch: 'full' },
  {
    path: 'sidequest-xp',
    loadChildren: () =>
      import('./e-commerce/e-commerce.module').then((m) => m.ECommerceModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
