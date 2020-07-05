import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCodeMeetComponent } from './update-code-meet.component';

describe('UpdateCodeMeetComponent', () => {
  let component: UpdateCodeMeetComponent;
  let fixture: ComponentFixture<UpdateCodeMeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCodeMeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCodeMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
