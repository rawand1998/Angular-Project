import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdawnComponent } from './dropdawn.component';

describe('DropdawnComponent', () => {
  let component: DropdawnComponent;
  let fixture: ComponentFixture<DropdawnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdawnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdawnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
