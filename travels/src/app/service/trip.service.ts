import { Injectable,NgModule } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { TripDetails } from '../model/tripdetails.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@NgModule({
  imports:[HttpClientModule],
})
export class TripService { 
  count:any;
  data: number=0;
  private baseUrl = "https://localhost:7199/trip/";
  private gettripUrl="fetch_last_trip";
  private addtripUrl="add_new_trip";
  private fetchtripcounturn="fetch_trip_count";
  constructor(private http:HttpClient) { }
  

  setData(value: number) {
    this.data = value;
  } 

  getData() {
    return this.data;
  }
 
  GetlastTrip(): Observable<Array<TripDetails>>{
    return this.http.get<Array<TripDetails>>(this.baseUrl + this.gettripUrl+'/'+this.data);
  }
  AddTrip(adddata : TripDetails): Observable<any>{
    return this.http.post<any>(this.baseUrl + this.addtripUrl,adddata);
  }
  FetchTripCount():Observable<any>{
    return this.http.get<any>(this.baseUrl+this.fetchtripcounturn);
  }
}
