import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordercountryComponent } from './bordercountry.component';

describe('BordercountryComponent', () => {
  let component: BordercountryComponent;
  let fixture: ComponentFixture<BordercountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BordercountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BordercountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
