import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingtwoComponent } from './siblingtwo.component';

describe('SiblingtwoComponent', () => {
  let component: SiblingtwoComponent;
  let fixture: ComponentFixture<SiblingtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingtwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
