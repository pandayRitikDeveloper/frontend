import { Component } from '@angular/core';
import { AuthService } from '../sevice/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent {
  email!: string;
  password!: string;
  Location:any;
  confirmPassword!:string;
  name:any;
  phone:any;
  constructor(private authService:AuthService,private router:Router){
   
  }
  onSubmit(): void {
   const obj={name:this.name,email:this.email,password:this.password,
    phoneNumber:this.phone,location:this.Location}
    this.authService.register(obj)
      .subscribe(
        (response) => {
          this.authService.saveUserDetails(response)
          console.log(response)
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
            
          // Handle successful login, e.g., store authentication status
          // and redirect to dashboard page.
        },
        (error) => {
          // Handle login error, e.g., display error message to the user.
        }
      );
  }

}
