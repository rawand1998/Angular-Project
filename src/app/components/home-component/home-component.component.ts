import { Component, OnInit } from '@angular/core';
import {CountryserviceService} from '../../services/countryservice.service'
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor( private service: CountryserviceService) { }
  data:any
  ngOnInit(): void {
    this.service.getAllCountry().subscribe(country => {
     this. data=country
     console.log(this.data)
    })
    
  }

}
