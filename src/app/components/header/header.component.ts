/*
 * File: header.component.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 7:10:24 pm
 * Last Modified: Wednesday, 4th May 2022 5:51:29 pm
 * Copyright © 2022 Sidequest XP
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidequest-xp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  redirectToCart() {
    this.router.navigate(['e-commerce/cart']);
  }
}
