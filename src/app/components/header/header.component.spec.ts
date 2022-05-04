/*
 * File: header.component.spec.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 7:10:24 pm
 * Last Modified: Wednesday, 4th May 2022 12:06:23 pm
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

describe('HeaderComponent', () => {
  let spectator: Spectator<HeaderComponent>;

  const createComponent = createComponentFactory({
    component: HeaderComponent,
    imports: [
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
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
