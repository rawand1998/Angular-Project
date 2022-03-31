import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CountryserviceService {
 

  constructor(private http: HttpClient ) { }
  country="https://restcountries.com/v3.1/all"
  
  getCountryDetails(id:any){
    
    return this.getAllCountry().pipe(
      
      
      map((country: any) => {
        
  
        return country.filter((country: any) =>country.name.common === id)[0];
      })
    );}


   
  getAllCountry(){
    return this.http.get(this.country)
    
  }
  getRegion(region:any){
    return this.http.get(`https://restcountries.com/v3.1/region/${region}`);
  }
}
