import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingoneComponent } from './siblingone.component';

describe('SiblingoneComponent', () => {
  let component: SiblingoneComponent;
  let fixture: ComponentFixture<SiblingoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
