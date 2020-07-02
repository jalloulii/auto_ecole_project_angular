import { TestBed } from '@angular/core/testing';

import { MeetCodeService } from './meet-code.service';

describe('MeetCodeService', () => {
  let service: MeetCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
