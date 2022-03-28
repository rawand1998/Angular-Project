import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountryserviceService {

  constructor(private http: HttpClient) { }
  country="https://restcountries.com/v3.1/all"
  getAllCountry():Observable<any>{
    return this.http.get(this.country)

  }
}
