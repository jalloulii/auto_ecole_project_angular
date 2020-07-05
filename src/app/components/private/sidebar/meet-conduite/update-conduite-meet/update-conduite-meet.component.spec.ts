import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConduiteMeetComponent } from './update-conduite-meet.component';

describe('UpdateConduiteMeetComponent', () => {
  let component: UpdateConduiteMeetComponent;
  let fixture: ComponentFixture<UpdateConduiteMeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateConduiteMeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateConduiteMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
