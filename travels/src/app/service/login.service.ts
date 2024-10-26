import { Injectable, NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginDetails } from '../model/logindetails.model';
import { Observable } from 'rxjs';

@NgModule({
  imports:[HttpClientModule]
})

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private id: any;
  private fname : string="";
  private psd: any;
  private baseUrl = "https://localhost:7199/login/"
  private searchidurl="search_loginid"
  private addId="add_login_details"
  constructor(private http:HttpClient) { }

  setData(fnamevalue : any , idvalue : any , psdvalue : any) {
    this.id = idvalue;
    this.fname = fnamevalue;
    this.psd = psdvalue;
  }

  getData() {
    return this.id,this.psd,this.fname;   
  }
  GetUserName(){
    return this.fname;
  }
  getUserID(){
    return this.id;
  }

  CheckloginId() : Observable<any>{
    return this.http.get<any>(this.baseUrl+this.searchidurl+'/'+this.fname+'/'+this.id+'/'+this.psd);
  }
  AddloginId(adddata : LoginDetails) : Observable<any>{
    return this.http.post<any>(this.baseUrl+this.addId,adddata);
  }
}
