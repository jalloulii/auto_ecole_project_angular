import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConduiteMeetComponent } from './add-conduite-meet.component';

describe('AddConduiteMeetComponent', () => {
  let component: AddConduiteMeetComponent;
  let fixture: ComponentFixture<AddConduiteMeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConduiteMeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConduiteMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
