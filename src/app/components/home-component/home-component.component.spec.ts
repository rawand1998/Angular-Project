import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponentComponent } from './home-component.component';
import {CountryserviceService} from '../../services/countryservice.service'
import { RouterTestingModule } from "@angular/router/testing";
import {HttpClientModule} from '@angular/common/http';
describe('HomeComponentComponent', () => {
  let component: HomeComponentComponent;
  let fixture: ComponentFixture<HomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponentComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule,HttpClientModule],
      providers: [CountryserviceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have name', () => {
    expect(component.UserName).toBe('rawand');
  });
});
