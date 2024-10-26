import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ServicespageComponent } from './servicespage/servicespage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { LoginService } from './service/login.service';
import { PersonalService } from './service/personal.service';
import { CityService } from './service/city.service';
import { CountryService } from './service/country.service';
import { CurrencyService } from './service/currency.service';
import { DiscountService } from './service/discount.service';
import { TripService } from './service/trip.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
    imports: [HttpClientModule,CommonModule,CountryService,TripService,CityService,CurrencyService,DiscountService, RouterOutlet, HomepageComponent,AboutpageComponent,ServicespageComponent,ContactpageComponent,LoginpageComponent,SignuppageComponent,LoginService,PersonalService],
    template:'<app-loginpage (childEvent)="onChildEvent()"></app-loginpage>',
})
export class AppComponent { 
  
  homepageview : boolean=false;
  aboutpageview : boolean=false;
  servicespageview : boolean=false; 
  contactpageview : boolean=false;
  loginpageview : boolean=false;
  signuppageview : boolean=false;

  onChildEvent(){
    this.homepageview=true;
    this.aboutpageview=false;
    this.servicespageview=false;
    this.contactpageview=false;
    this.loginpageview=false;
    this.signuppageview=false;
  }
  showhomepageview(){
    this.homepageview=true;
    this.aboutpageview=false;
    this.servicespageview=false;
    this.contactpageview=false;
    this.loginpageview=false;
    this.signuppageview=false;
  }
  showaboutpageview(){
    this.homepageview=false;
    this.aboutpageview=true;
    this.servicespageview=false;
    this.contactpageview=false;
    this.loginpageview=false;
    this.signuppageview=false;
  }
  showservicespageview(){
    this.homepageview=false;
    this.aboutpageview=false;
    this.servicespageview=true;
    this.contactpageview=false;
    this.loginpageview=false;
    this.signuppageview=false;
  }
  showcontactpageview(){
    this.homepageview=false;
    this.aboutpageview=false;
    this.servicespageview=false;
    this.contactpageview=true;
    this.loginpageview=false;
    this.signuppageview=false;
  }
  showloginpageview(){
    this.homepageview=false;
    this.aboutpageview=false;
    this.servicespageview=false;
    this.contactpageview=false;
    this.loginpageview=true;
    this.signuppageview=false;
  }
  showsignuppageview(){
    this.homepageview=false;
    this.aboutpageview=false;
    this.servicespageview=false;
    this.contactpageview=false;
    this.loginpageview=false;
    this.signuppageview=true;
  }
}
