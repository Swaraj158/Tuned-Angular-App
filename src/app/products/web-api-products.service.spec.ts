import { TestBed } from '@angular/core/testing';

import { WebApiProductsService } from './web-api-products.service';

describe('WebApiProductsService', () => {
  let service: WebApiProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebApiProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
