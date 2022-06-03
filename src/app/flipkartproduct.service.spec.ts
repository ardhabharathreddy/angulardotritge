import { TestBed } from '@angular/core/testing';

import { FlipkartproductService } from './flipkartproduct.service';

describe('FlipkartproductService', () => {
  let service: FlipkartproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
