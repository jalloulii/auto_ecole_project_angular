import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetConduiteComponent } from './meet-conduite.component';

describe('MeetConduiteComponent', () => {
  let component: MeetConduiteComponent;
  let fixture: ComponentFixture<MeetConduiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetConduiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetConduiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
