import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutpage.component.html',
  styleUrl: './aboutpage.component.less'
})
export class AboutpageComponent {
showschool:boolean=true;
showcollege:boolean=false;
showjobs:boolean=false;
showcirtificate:boolean=false;
showinternship:boolean=false;
showprojets:boolean=false;
school(){
  this.showschool=true;
  this.showcollege=false;
  this.showjobs=false;
  this.showcirtificate=false;
  this.showinternship=false;
  this.showprojets=false;

}
college(){
  this.showschool=false;
  this.showcollege=true;
  this.showjobs=false;
  this.showcirtificate=false;
  this.showinternship=false;
  this.showprojets=false;
}
jobs(){
  this.showschool=false;
  this.showcollege=false;
  this.showjobs=true;
  this.showcirtificate=false;
  this.showinternship=false;
  this.showprojets=false;
}
skills(){
  this.showschool=false;
  this.showcollege=false;
  this.showjobs=false;
  this.showcirtificate=true;
  this.showinternship=false;
  this.showprojets=false;
}
internship(){
  this.showschool=false;
  this.showcollege=false;
  this.showjobs=false;
  this.showcirtificate=false;
  this.showinternship=true;
  this.showprojets=false;
}
projets(){
  this.showschool=false;
  this.showcollege=false;
  this.showjobs=false;
  this.showcirtificate=false;
  this.showinternship=false;
  this.showprojets=true;
}

}
