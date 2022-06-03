import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesummaryComponent } from './vehiclesummary.component';

describe('VehiclesummaryComponent', () => {
  let component: VehiclesummaryComponent;
  let fixture: ComponentFixture<VehiclesummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
