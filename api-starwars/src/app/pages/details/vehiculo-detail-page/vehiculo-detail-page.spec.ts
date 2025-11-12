import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoDetailPage } from './vehiculo-detail-page';

describe('VehiculoDetailPage', () => {
  let component: VehiculoDetailPage;
  let fixture: ComponentFixture<VehiculoDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculoDetailPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
