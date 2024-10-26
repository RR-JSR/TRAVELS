import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingpageComponent } from '../bookingpage/bookingpage.component';
import { PastbookingpageComponent } from '../pastbookingpage/pastbookingpage.component';
@Component({
  selector: 'app-servicespage',
  standalone: true,
  imports: [CommonModule,BookingpageComponent,PastbookingpageComponent],
  templateUrl: './servicespage.component.html',
  styleUrl: './servicespage.component.less',
  template: `<app-bookingpage (childEvent)="onChildEvent()"></app-bookingpage>`,
})
export class ServicespageComponent {
bookingpage:Boolean=false;
pastbookingpage:boolean=false;

onChildEvent(){
  this.bookingpage=false; 
  this.pastbookingpage=false;
}

showbookingpage(){
  this.bookingpage=true;
  this.pastbookingpage=false;
}
showpastbookingpage(){
  this.bookingpage=false;
  this.pastbookingpage=true;
}
}
