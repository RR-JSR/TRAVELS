import { Component,EventEmitter,Output } from '@angular/core';
import { CommonModule} from '@angular/common';
import { LoginDetails } from '../model/logindetails.model';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.less' 
}) 
export class LoginpageComponent {
  exist :any; 
  checkloginlist : LoginDetails[]=[];
  checklogindata : LoginDetails=new LoginDetails;
  @Output() childEvent = new EventEmitter<void>();

  constructor(private loginService: LoginService){}
  
  CheckLoginDetail(fname : string , id : string , psd : string ){
    this.loginService.setData(fname,Number(id),psd);
    this.loginService.CheckloginId().subscribe(
      (responce)=>{
        this.exist=responce;
      }
    );
    this.callParentMethod();
  }
  callParentMethod() {
    this.childEvent.emit();
  }
}
