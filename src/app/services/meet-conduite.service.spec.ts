import { TestBed } from '@angular/core/testing';

import { MeetConduiteService } from './meet-conduite.service';

describe('MeetConduiteService', () => {
  let service: MeetConduiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetConduiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
