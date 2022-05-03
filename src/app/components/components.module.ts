/*
 * File: components.module.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 7:09:47 pm
 * Last Modified: Tuesday, 3rd May 2022 7:11:32 pm
 * Copyright © 2022 Sidequest XP
 */


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild()
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentsModule { }
