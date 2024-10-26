import { Injectable,NgModule } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { CountryDetils } from '../model/countrydetails.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@NgModule({
  imports: [HttpClientModule]
})
export class CountryService {
  private baseUrl = "https://localhost:7199/country/"
  private getcountry ="fetch_country_details";

  constructor(private http:HttpClient) { }

  Fetchcountry(): Observable<CountryDetils[]>{
    return this.http.get<CountryDetils[]>(this.baseUrl + this.getcountry);
  }

}
