import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GvehiculeComponent } from './gvehicule.component';

describe('GvehiculeComponent', () => {
  let component: GvehiculeComponent;
  let fixture: ComponentFixture<GvehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GvehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GvehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
