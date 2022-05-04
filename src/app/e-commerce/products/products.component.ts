import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromProduct from '@sidequest-xp-core/store/product/actions/product.actions';
import { selectAllProducts } from '@sidequest-xp-store/product/selectors/product.selectors';

@Component({
  selector: 'sidequest-xp-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$ = this.store.select(selectAllProducts);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fromProduct.loadAllProducts());
  }
}
