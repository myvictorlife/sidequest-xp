/*
 * File: header.component.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 7:10:24 pm
 * Last Modified: Wednesday, 4th May 2022 10:46:46 pm
 * Copyright © 2022 Sidequest XP
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectTotalOfItem } from '@sidequest-xp-store/cart/selectors/cart.selectors';

@Component({
  selector: 'sidequest-xp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  selectTotalOfItem$ = this.store.select(selectTotalOfItem);
  constructor(private router: Router, private store: Store) {}

  redirectToCart() {
    this.router.navigate(['e-commerce/cart']);
  }
}
