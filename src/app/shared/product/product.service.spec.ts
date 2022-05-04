/*
 * File: product-details.component.spec.ts
 * Project: sidequest-xp
 * Created: Wednesday, 4th May 2022 8:12:27 am
 * Last Modified: Wednesday, 4th May 2022 12:46:43 pm
 * Copyright © 2022 Sidequest XP
 */

import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  createServiceFactory,
  SpectatorService,
  SpyObject,
} from '@ngneat/spectator';
import { of } from 'rxjs';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let spectator: SpectatorService<ProductService>;
  let httpClient: SpyObject<HttpClient>;
  const createService = createServiceFactory({
    service: ProductService,
    imports: [HttpClientModule],
  });

  beforeEach(() => {
    spectator = createService();
    httpClient = spectator.inject(HttpClient);
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('should create', () => {
    const spyGet = jest.spyOn(httpClient, 'get').mockImplementation(() => {
      return of({
        data: {
          products: [
            {
              id: '1',
              name: 'Unit Test',
            },
          ],
        },
      });
    });
    spectator.service.fetchAllProducts().subscribe((products) => {
      expect(spyGet).toHaveBeenCalledWith(
        'http://localhost:5001/sidequest-xp/us-central1/products'
      );
      expect(products.length).toEqual(1);
    });
  });
});
