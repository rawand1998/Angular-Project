import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryserviceService } from '../../services/countryservice.service'

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private service: CountryserviceService, private route: ActivatedRoute) { }
  data: any
  ngOnInit(): void {
    this.service.getAllCountry().subscribe(country => {
      this.data = country

    })
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.service.getAllCountry().subscribe((counties: any) => {

          let test = counties.filter((country: any) => country.name.common === (params['searchTerm']))
          this.data = test


        })


    })
    this.route.params.subscribe(params => {
      if (params['id'])
        this.service.getAllCountry().subscribe((counties: any) => {

          let test = counties.filter((country: any) => country.name.common === (params['id']))
          this.data = test


        })


    })
  
  }
 

}
function searchTerm(searchTerm: any, string: any) {
  throw new Error('Function not implemented.');
}

