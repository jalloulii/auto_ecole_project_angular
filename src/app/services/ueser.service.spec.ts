import { TestBed } from '@angular/core/testing';

import { UeserService } from './ueser.service';

describe('UeserService', () => {
  let service: UeserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UeserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
