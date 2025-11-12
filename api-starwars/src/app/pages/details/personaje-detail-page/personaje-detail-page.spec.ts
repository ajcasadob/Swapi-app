import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeDetailPage } from './personaje-detail-page';

describe('PersonajeDetailPage', () => {
  let component: PersonajeDetailPage;
  let fixture: ComponentFixture<PersonajeDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajeDetailPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
