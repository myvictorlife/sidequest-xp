/*
 * File: app.component.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 7:44:11 am
 * Last Modified: Tuesday, 3rd May 2022 7:54:59 am
 * Copyright © 2022 Sidequest XP
 */

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'sidequest-xp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sidequest-xp';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'pt']);
    translate.setDefaultLang('en');
  }
}
