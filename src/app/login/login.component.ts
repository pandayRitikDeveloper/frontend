import { Component } from '@angular/core';
import { AuthService } from '../sevice/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;
  value = '';

  constructor(private authService: AuthService,private router:Router) {
    
  }

  onSubmit(): void {
    this.authService.login(this.email, this.password)
      .subscribe(
        (response) => {
          this.authService.saveUserDetails(response)
          console.log(response)
          this.router.navigate(['/']);
          
          // Handle successful login, e.g., store authentication status
          // and redirect to dashboard page.
        },
        (error) => {
          // Handle login error, e.g., display error message to the user.
        }
      );
  }

}
