import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetCodeComponent } from './meet-code.component';

describe('MeetCodeComponent', () => {
  let component: MeetCodeComponent;
  let fixture: ComponentFixture<MeetCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
