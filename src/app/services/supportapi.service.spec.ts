import { TestBed } from '@angular/core/testing';

import { SupportapiService } from './supportapi.service';

describe('SupportapiService', () => {
  let service: SupportapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
