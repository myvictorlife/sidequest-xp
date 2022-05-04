/*
 * File: app-routing.module.ts
 * Project: sidequest-xp
 * Created: Monday, 2nd May 2022 11:17:29 pm
 * Last Modified: Wednesday, 4th May 2022 5:32:52 pm
 * Copyright © 2022 Sidequest XP
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./e-commerce/e-commerce.module').then((m) => m.ECommerceModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
