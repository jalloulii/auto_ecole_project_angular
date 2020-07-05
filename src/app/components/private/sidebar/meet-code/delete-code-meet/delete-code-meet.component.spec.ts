import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCodeMeetComponent } from './delete-code-meet.component';

describe('DeleteCodeMeetComponent', () => {
  let component: DeleteCodeMeetComponent;
  let fixture: ComponentFixture<DeleteCodeMeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCodeMeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCodeMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
