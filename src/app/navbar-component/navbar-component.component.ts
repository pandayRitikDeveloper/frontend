import { Component } from '@angular/core';
import { AuthService } from '../sevice/auth.service';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent {
  login:any;
  constructor(private authService:AuthService){
    this.login=authService.isLoggedIn();
  }
 logout(){
  this.authService.logout();
 }
}
