import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripService } from '../service/trip.service';
import { TripDetails } from '../model/tripdetails.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pastbookingpage',
  standalone: true,
  imports: [CommonModule,FormsModule], 
  templateUrl: './pastbookingpage.component.html',
  styleUrl: './pastbookingpage.component.less'
}) 
export class PastbookingpageComponent {

  lastTripData : TripDetails=new TripDetails;
  show:boolean=false;
  country :string="";
  city :string="";
  currecny: string="";
  discount:string="";
  constructor(private tripServices:TripService){} 

  showdetails(userInput:string){
    this.tripServices.setData(Number(userInput));
    this.tripServices.GetlastTrip().subscribe(
      (response)=>{
        this.lastTripData=response[0];
        this.show=true;
        this.unrapcountrydetails();
        this.unrapcitydetails();
        this.unrapcurrencydetails();
        this.unrapdiscountdetails(); 
      }
    );
    
  }
  
  unrapcountrydetails(){
    if(this.lastTripData.countryId==1){
      this.country="INDIA";
    }
    else if(this.lastTripData.countryId==2){
      this.country="USA";
    }
    else if(this.lastTripData.countryId==3){
      this.country="JAPAN";
    }
    else if(this.lastTripData.countryId==4){
      this.country="CHINA";
    }
    else if(this.lastTripData.countryId==5){
      this.country="RUSSIA";
    }
    else if(this.lastTripData.countryId==6){
      this.country="NEPAL";
    }
  }
  unrapcitydetails(){
    if(this.lastTripData.cityId==1)(
      this.city="DELHI"
    )
    else if(this.lastTripData.cityId==2)(
      this.city="New York"
    )
    else if(this.lastTripData.cityId==3)(
      this.city="TOKYO"
    )
    else if(this.lastTripData.cityId==4)(
      this.city="BEJIN"
    )
    else if(this.lastTripData.cityId==5)(
      this.city="MOROCCO"
    )
    else if(this.lastTripData.cityId==6)(
      this.city="KATMANDU"
    )
  }
  unrapcurrencydetails(){
    if(this.lastTripData.currencyId==1){
      this.currecny="RPUEES"
    }
    else if(this.lastTripData.currencyId==2){
      this.currecny="DOLLERS"
    }
  }
  unrapdiscountdetails(){
    if(this.lastTripData.discountId==1){
      this.discount="Student Discount";
    }
    else if(this.lastTripData.discountId==2){
      this.discount="Couple Discount";
    }
    else if(this.lastTripData.discountId==3){ 
      this.discount="Office Discount";
    }
    else if(this.lastTripData.discountId==4){
      this.discount="Army Discount";
    }
  }

  hidedetails(){
    this.show=false;
  }
} 
