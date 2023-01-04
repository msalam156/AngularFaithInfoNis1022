import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Routing';
// constructor
  constructor(private router:Router){}
  // c
  //method for logOut
logOut():void{
  this.router.navigateByUrl('');
}
// for loged in
isLoggedIn:boolean=false;

}
