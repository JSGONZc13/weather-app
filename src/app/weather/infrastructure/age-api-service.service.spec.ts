import { TestBed } from '@angular/core/testing';

import { AgeApiServiceService } from './age-api-service.service';

describe('AgeApiServiceService', () => {
  let service: AgeApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgeApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
