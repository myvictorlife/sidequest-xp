/*
 * File: core.module.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 8:46:42 am
 * Last Modified: Tuesday, 3rd May 2022 8:50:20 am
 * Copyright © 2022 Sidequest XP
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { coreEffectsAtBootstrap } from './core.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature(coreEffectsAtBootstrap)
  ]
})
export class CoreModule { }
