import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCodeMeetComponent } from './add-code-meet.component';

describe('AddCodeMeetComponent', () => {
  let component: AddCodeMeetComponent;
  let fixture: ComponentFixture<AddCodeMeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCodeMeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCodeMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
