import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

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

//     getAllFoodsBySearchTerm(searchTerm:string){
//       this.getAllCountry().subscribe((counties: any) => {

//         let test = counties.filter((country: any) => country.name.common.includes(searchTerm))
        
// console.log(test)

//       })
//     }
   
  getAllCountry(){
    return this.http.get(this.country)

  }
}
