import { Injectable,NgModule } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { CurrencyDetils } from '../model/currencydetails.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@NgModule({
  imports:[HttpClientModule],
})

export class CurrencyService {
  private baseUrl = "https://localhost:7199/currency/"
  private getcurrency="fetch_currency_details"

  constructor(private http:HttpClient) { }

  FetchCurrecny():Observable<CurrencyDetils[]>{
    return this.http.get<CurrencyDetils[]>(this.baseUrl + this.getcurrency);
  }
}
