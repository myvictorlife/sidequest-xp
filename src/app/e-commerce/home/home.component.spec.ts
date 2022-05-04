/*
 * File: home.component.spec.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 6:46:01 pm
 * Last Modified: Wednesday, 4th May 2022 12:11:33 pm
 * Copyright © 2022 Sidequest XP
 */

import { ComponentsModule } from '@sidequest-xp-components/components.module';

import { HomeComponent } from './home.component';
import { provideMockStore } from '@ngrx/store/testing';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader,
} from '@ngx-translate/core';

import { ProductsComponent } from '../products/products.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('HomeComponent', () => {
  let spectator: Spectator<HomeComponent>;

  let initialState: any;

  const createComponent = createComponentFactory({
    component: HomeComponent,
    imports: [
      ComponentsModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: TranslateFakeLoader,
        },
      }),
    ],
    providers: [
      provideMockStore({
        initialState,
      }),
    ],
    declarations: [ProductsComponent],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
