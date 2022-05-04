/*
 * File: components.module.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 7:09:47 pm
 * Last Modified: Wednesday, 4th May 2022 7:08:45 pm
 * Copyright © 2022 Sidequest XP
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
  ],
  exports: [HeaderComponent],
})
export class ComponentsModule {}
