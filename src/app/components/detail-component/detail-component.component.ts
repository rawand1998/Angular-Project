import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryserviceService } from 'src/app/services/countryservice.service';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {
  userId: any;
  data: any;

  constructor(private service: CountryserviceService ,private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId=params['id'];
      console.log(this.userId)
     this.service.getCountryDetails(this.userId).subscribe(foodDetails=>{this.data=foodDetails})
    
     
    })
  }

}
