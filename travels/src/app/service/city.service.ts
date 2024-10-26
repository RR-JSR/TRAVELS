import { Injectable,NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityDetils } from '../model/citydetails.model';

@Injectable({
  providedIn: 'root'
})

@NgModule({

  imports: [HttpClientModule]
})
export class CityService {

  private baseUrl = "https://localhost:7199/city/"
  private getAllCityUrl = 'fetch_city_details';

  constructor(private http: HttpClient) { }
  getAllCities(): Observable<CityDetils[]> {
    return this.http.get<CityDetils[]>(this.baseUrl + this.getAllCityUrl);
  }

}
