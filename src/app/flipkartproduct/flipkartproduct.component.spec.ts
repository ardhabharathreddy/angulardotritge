import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartproductComponent } from './flipkartproduct.component';

describe('FlipkartproductComponent', () => {
  let component: FlipkartproductComponent;
  let fixture: ComponentFixture<FlipkartproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipkartproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
