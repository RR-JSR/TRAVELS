import { Injectable,NgModule } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { DiscountDetils } from '../model/discountdetails.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@NgModule({
  imports:[HttpClientModule],
})
export class DiscountService {

  private baseUrl = "https://localhost:7199/discount/"
  private getdiscount="fetch_discount_details";

  constructor(private http:HttpClient) { }

  FetchDiscount():Observable<DiscountDetils[]>{
    return this.http.get<DiscountDetils[]>(this.baseUrl + this.getdiscount);
  }

}
