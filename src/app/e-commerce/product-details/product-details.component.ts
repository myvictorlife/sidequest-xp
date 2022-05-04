/*
 * File: product-details.component.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 7:21:30 am
 * Last Modified: Wednesday, 4th May 2022 5:47:46 pm
 * Copyright © 2022 Sidequest XP
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentProduct } from '@sidequest-xp-store/product/selectors/product.selectors';

@Component({
  selector: 'sidequest-xp-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productSelected$ = this.store.select(selectCurrentProduct);
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.productSelected$.subscribe((product) => {
      if (!product) {
        this.router.navigate(['e-commerce']);
      }
    });
  }
}
