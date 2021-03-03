import { TestBed } from '@angular/core/testing';

import { SuperServiceService } from './super-service.service';

describe('SuperServiceService', () => {
  let service: SuperServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
