import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousMoniteursComponent } from './rendez-vous-moniteurs.component';

describe('RendezVousMoniteursComponent', () => {
  let component: RendezVousMoniteursComponent;
  let fixture: ComponentFixture<RendezVousMoniteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendezVousMoniteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezVousMoniteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
