import { Component } from '@angular/core';
import { PersonalDetails } from '../model/personaldetails.model';
import { LoginDetails } from '../model/logindetails.model';
import { PersonalService } from '../service/personal.service';
import { LoginService } from '../service/login.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-signuppage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signuppage.component.html',
  styleUrl: './signuppage.component.less'
})
export class SignuppageComponent {

  addpersonalList : PersonalDetails[]=[];
  addloginlist :LoginDetails[]=[];
  addpersonaldata :PersonalDetails=new PersonalDetails;
  addlogindata : LoginDetails=new LoginDetails;
  count:any;

  constructor (private personalService :PersonalService,private loginService:LoginService){}

  ngOnInit():void{
    this.personalService.GetperssonalIdCount().subscribe(
      (response) =>{
        this.count =response;
      }
    );
  }

  SavePersonalDetails(idValue :string, fnameValue:string, lnameValue:string , psdValue:string , phoneValue:string ,ageValue:string , genderValue:string , emailValue:string , professionValue:string){
    this.addpersonaldata.id=Number(idValue);
    this.addpersonaldata.fname=fnameValue;
    this.addpersonaldata.lname=lnameValue;
    this.addpersonaldata.phone=Number(phoneValue);
    this.addpersonaldata.age=Number(ageValue);
    this.addpersonaldata.gender=genderValue;
    this.addpersonaldata.email=emailValue;
    this.addpersonaldata.profession=professionValue;
    this.personalService.createpersonalId(this.addpersonaldata).subscribe(data =>{
      this.addpersonalList = data;
    });

    this.addlogindata.id=Number(idValue);
    this.addlogindata.fname=fnameValue;
    this.addlogindata.psd=psdValue;
    this.loginService.AddloginId(this.addlogindata).subscribe(data =>{
      this.addloginlist =data;
    });
  }  
}
