import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [LoginService],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.less'
})
export class HomepageComponent {

  constructor(private loginservice:LoginService){}
  name="User"
  ngOnInit(){ 
    this.name=this.loginservice.GetUserName();
  }

}
