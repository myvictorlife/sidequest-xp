/*
 * File: products.component.spec.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 7:18:04 pm
 * Last Modified: Wednesday, 4th May 2022 7:16:53 am
 * Copyright © 2022 Sidequest XP
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  let initialState: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent, ProductComponent],
      imports: [],
      providers: [
        provideMockStore({
          initialState,
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
