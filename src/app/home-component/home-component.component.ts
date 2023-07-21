import { Component } from '@angular/core';
import { AuthService } from '../sevice/auth.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  login:any;
  constructor(private authService:AuthService){
   this.login=authService.isLoggedIn();
  }
}
