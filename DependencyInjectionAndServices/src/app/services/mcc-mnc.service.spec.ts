import { TestBed } from '@angular/core/testing';

import { MccMncService } from './mcc-mnc.service';

describe('MccMncService', () => {
  let service: MccMncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MccMncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
