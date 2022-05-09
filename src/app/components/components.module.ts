/*
 * File: components.module.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 7:09:47 pm
 * Last Modified: Monday, 9th May 2022 6:12:05 pm
 * Copyright © 2022 Sidequest XP
 */

import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from '@sidequest-xp-shared/shared.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    SharedModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
  ],
  exports: [HeaderComponent],
})
export class ComponentsModule {}
