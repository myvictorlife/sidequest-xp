/*
 * File: header.component.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 7:10:24 pm
 * Last Modified: Monday, 9th May 2022 6:05:30 pm
 * Copyright © 2022 Sidequest XP
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { selectTotalOfItem } from '@sidequest-xp-store/cart/selectors/cart.selectors';

@Component({
  selector: 'sidequest-xp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  selectTotalOfItem$ = this.store.select(selectTotalOfItem);
  constructor(private router: Router, private store: Store,
    public translateService: TranslateService) {}

  redirectToCart() {
    this.router.navigate(['e-commerce/cart']);
  }

  redirectToHome() {
    this.router.navigate(['e-commerce']);
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
  }
}
