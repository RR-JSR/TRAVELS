import { Injectable, NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonalDetails } from '../model/personaldetails.model';

@Injectable({
  providedIn: 'root'
})
@NgModule({
  imports: [HttpClientModule]
})
export class PersonalService {

 
  private baseUrl = "https://localhost:7199/personal/";
  private savedetailsUrl="add_personal_details";
  private getdetailUrl ="fetch_total_count_of_ids";

  constructor(private http: HttpClient) { }

 

  createpersonalId(createdata : PersonalDetails): Observable<any> {
    return this.http.post<any>(this.baseUrl + this.savedetailsUrl, createdata);
  }

  GetperssonalIdCount(): Observable<any> {
    return this.http.get<any>(this.baseUrl + this.getdetailUrl);
  }
}
