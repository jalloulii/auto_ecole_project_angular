import { TestBed } from '@angular/core/testing';

import { ConduiteMeetService } from './conduite-meet.service';

describe('ConduiteMeetService', () => {
  let service: ConduiteMeetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConduiteMeetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
