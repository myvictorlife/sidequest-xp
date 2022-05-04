/*
 * File: product.component.spec.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 9:14:18 pm
 * Last Modified: Tuesday, 3rd May 2022 10:12:17 pm
 * Copyright © 2022 Sidequest XP
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { MatCardModule } from '@angular/material/card';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
      imports: [MatCardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
