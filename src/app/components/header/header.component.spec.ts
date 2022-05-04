/*
 * File: header.component.spec.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 7:10:24 pm
 * Last Modified: Wednesday, 4th May 2022 6:11:50 pm
 * Copyright © 2022 Sidequest XP
 */

import { HeaderComponent } from './header.component';
import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader,
} from '@ngx-translate/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let spectator: Spectator<HeaderComponent>;

  let initialState: any;

  const createComponent = createComponentFactory({
    component: HeaderComponent,
    imports: [
      RouterTestingModule,
      MatToolbarModule,
      MatIconModule,
      MatBadgeModule,
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
    ]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
