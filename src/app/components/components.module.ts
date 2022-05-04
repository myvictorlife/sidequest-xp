/*
 * File: components.module.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 7:09:47 pm
 * Last Modified: Wednesday, 4th May 2022 7:46:24 am
 * Copyright © 2022 Sidequest XP
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
  ],
  exports: [HeaderComponent],
})
export class ComponentsModule {}
