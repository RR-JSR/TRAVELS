import { Component,EventEmitter, Output } from '@angular/core';
import { TripDetails } from '../model/tripdetails.model';
import { TripService } from '../service/trip.service';
import { CommonModule } from '@angular/common';
import { CityDetils } from '../model/citydetails.model';
import { CityService } from '../service/city.service';
import { CountryDetils } from '../model/countrydetails.model';
import { CountryService } from '../service/country.service';
import { CurrencyDetils } from '../model/currencydetails.model';
import { CurrencyService } from '../service/currency.service';
import { DiscountDetils } from '../model/discountdetails.model';
import { DiscountService } from '../service/discount.service';
import { LoginService } from '../service/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bookingpage',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './bookingpage.component.html',
  styleUrl: './bookingpage.component.less'
})
export class BookingpageComponent {

  addTripList : TripDetails[]=[];
  cityList : CityDetils[]=[];
  countryList : CountryDetils[]=[];
  currencyList : CurrencyDetils[]=[]
  discountList : DiscountDetils[]=[];
  addtripData :TripDetails=new TripDetails;
  tripIdcount:number=0;
  totalcost:number=0;
  estimatedccost:number=0;
  selectedCityId: number | null = null;
  selectedDiscountId: number | null = null;
  @Output() childEvent = new EventEmitter<void>();

  constructor(public tripService:TripService,public loginService:LoginService,public cityService:CityService,public countryService:CountryService ,public currencyService:CurrencyService,public discountService:DiscountService ){}

  name:any;
  id:any;

  ngOnInit():void{
    this.tripService.FetchTripCount().subscribe(
      (response)=>{
        this.tripIdcount=response;
      }
    );
    this.cityService.getAllCities().subscribe(
      (response)=>{
        this.cityList=response;
      }
    );
    this.countryService.Fetchcountry().subscribe(
      (response)=>{
        this.countryList=response;
      }
    );
    this.currencyService.FetchCurrecny().subscribe(
      (response)=>{
        this.currencyList=response; 
      }
    );
    this.discountService.FetchDiscount().subscribe(
      (response)=>{
        this.discountList=response;
      } 
    );
    
    this.name=this.loginService.GetUserName();
    this.id=this.loginService.getUserID();

  }

  
  SaveTripDetails(tripIdValue:string , fnameValue:string , idValue:string , countryIdValue: string , cityIdValue:string , noOfDaysValue:string , noOfPersonValue:string , foodChoiseValue:string , currencyIdValue:string , estimatedCostValue:string , discountValue:string , totalCostValue:string){
    this.addtripData.tripId=Number(tripIdValue);
    this.addtripData.fname=fnameValue;
    this.addtripData.id=Number(idValue);
    this.addtripData.countryId=Number(countryIdValue);
    this.addtripData.cityId=Number(cityIdValue);
    this.addtripData.noOfDays=Number(noOfDaysValue);
    this.addtripData.totalPersons=Number(noOfPersonValue);
    this.addtripData.foodChoice=foodChoiseValue;
    this.addtripData.currencyId=Number(currencyIdValue);
    this.addtripData.estimatedCost=Number(estimatedCostValue);
    this.addtripData.discountId=Number(discountValue);
    this.addtripData.totalCost=Number(totalCostValue);
    this.tripService.AddTrip(this.addtripData).subscribe(data =>{
      this.addTripList = data;
    });
    this.callParentMethod();
  } 
  
  callParentMethod() {
    this.childEvent.emit();
  }
  
  calculateEstimatedCost(){
    if(this.selectedCityId==1){
      this.estimatedccost=500000
    }
    if(this.selectedCityId==2){
      this.estimatedccost=550000
    }
    if(this.selectedCityId==3){
      this.estimatedccost=600000
    }
    if(this.selectedCityId==4){
      this.estimatedccost=650000
    }
    if(this.selectedCityId==5){
      this.estimatedccost=700000
    }
    if(this.selectedCityId==6){
      this.estimatedccost=750000
    }

  }
  calculateTotalCost(){
    if(this.selectedDiscountId==1){
      this.totalcost=this.estimatedccost-((this.estimatedccost*10)/100);
    }
    if(this.selectedDiscountId==2){
      this.totalcost=this.estimatedccost-((this.estimatedccost*20)/100);
    }
    if(this.selectedDiscountId==3){
      this.totalcost=this.estimatedccost-((this.estimatedccost*15)/100);
    }
    if(this.selectedDiscountId==4){
      this.totalcost=this.estimatedccost-((this.estimatedccost*25)/100);
    }
  }

}
