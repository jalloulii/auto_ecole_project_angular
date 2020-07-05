import { TestBed } from '@angular/core/testing';

import { CodeMeetService } from './code-meet.service';

describe('CodeMeetService', () => {
  let service: CodeMeetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeMeetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
