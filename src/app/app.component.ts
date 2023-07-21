import { Component } from '@angular/core';
import { AuthService } from './sevice/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cart: any[] = [];

  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Check the initial login status when the app loads
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout(): void {
    // Log out the user and update the login status
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
