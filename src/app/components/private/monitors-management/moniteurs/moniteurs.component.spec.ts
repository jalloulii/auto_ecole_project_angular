import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoniteursComponent } from './moniteurs.component';

describe('MoniteursComponent', () => {
  let component: MoniteursComponent;
  let fixture: ComponentFixture<MoniteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoniteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoniteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
