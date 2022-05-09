/*
 * File: app.component.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 7:44:11 am
 * Last Modified: Monday, 9th May 2022 6:00:59 pm
 * Copyright © 2022 Sidequest XP
 */

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'sidequest-xp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sidequest-xp';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'pt']);
    translate.setDefaultLang('en');
  }
}
