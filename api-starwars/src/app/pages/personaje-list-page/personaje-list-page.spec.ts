import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeListPage } from './personaje-list-page';

describe('PersonajeListPage', () => {
  let component: PersonajeListPage;
  let fixture: ComponentFixture<PersonajeListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajeListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
