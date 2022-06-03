import { TestBed } from '@angular/core/testing';

import { VehicelServicesService } from './vehicel-services.service';

describe('VehicelServicesService', () => {
  let service: VehicelServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicelServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
