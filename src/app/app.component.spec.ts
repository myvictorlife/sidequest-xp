/*
 * File: app.component.spec.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 12:53:34 pm
 * Last Modified: Wednesday, 4th May 2022 12:30:17 pm
 * Copyright © 2022 Sidequest XP
 */

import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';

import { Spectator, createComponentFactory } from '@ngneat/spectator';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [
      RouterTestingModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: TranslateFakeLoader,
        },
      }),
    ],
  });

  beforeEach(async () => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator).toBeTruthy();
  });

  it(`should have as title 'sidequest-xp'`, () => {
    const title = spectator.component.title;
    expect(title).toEqual('sidequest-xp');
  });
});
