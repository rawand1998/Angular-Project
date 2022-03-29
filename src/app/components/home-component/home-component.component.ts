import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryserviceService } from '../../services/countryservice.service'
const REGION_OPTIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  static content(content: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private service: CountryserviceService, private route: ActivatedRoute) { }
  data: any
  regionFilter: any;
  regionOptions = REGION_OPTIONS;
  UserName="rawand" // for testing
  ngOnInit(): void {
    // get all
    this.service.getAllCountry().subscribe(country => {
      this.data = country

    })
    // Search 
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.service.getAllCountry().subscribe((counties: any) => {

          let test = counties.filter((country: any) => country.name.common === (params['searchTerm']))
          this.data = test


        })


    })
    // Details
    this.route.params.subscribe(params => {
      if (params['id'])
        this.service.getAllCountry().subscribe((counties: any) => {
          let test = counties.filter((country: any) => country.name.common === (params['id']))
          this.data = test
        })
    })
    
  // Filter country

  //  this.service.getAllCountry().subscribe((country: any) =>
  //  {
  //    let filter = country.filter((country: any) => 
    
  //     this.regionFilter=== country.region.includes(this.regionFilter)
    
  //    )
     
  //    this.data=filter
  // console.log(filter)
   
  //  }
  //  )
   
  // this.service.getAllCountry().subscribe((counties: any) => {
  //   let filter = counties.filter((country: any) => {
  //     this.regionFilter = country.region.includes(this.regionFilter)
  //   })
  //   this.data = filter
  //   console.log(this.data)
  // })
  }

  
 

}


function countries() {
  throw new Error('Function not implemented.');
}

