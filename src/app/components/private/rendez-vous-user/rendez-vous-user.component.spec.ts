import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousUserComponent } from './rendez-vous-user.component';

describe('RendezVousUserComponent', () => {
  let component: RendezVousUserComponent;
  let fixture: ComponentFixture<RendezVousUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendezVousUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezVousUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
