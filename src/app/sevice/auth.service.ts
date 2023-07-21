import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api'; // Replace this with your API endpoint
  private userLocalStorageKey = 'loggedInUser';

  constructor(private http: HttpClient,private router:Router) { }

  login(username: string, password: string): Observable<any> {
    const body = { email:username, password:password };
    return this.http.post<any>(this.apiUrl+'/login', body);
  }
  register(obj:any){
    return this.http.post<any>(this.apiUrl+'/register', obj);
  }
  saveUserDetails(user: any): void {
    localStorage.setItem(this.userLocalStorageKey, JSON.stringify(user));
  }

  getUserDetails(): any {
    const user = localStorage.getItem(this.userLocalStorageKey);
    return user ? JSON.parse(user) : null;
  }

  // Check if the user is logged in based on stored user details
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.userLocalStorageKey);
  }

  // Log out the user by removing the stored user details
  logout(): void {
    localStorage.removeItem(this.userLocalStorageKey);
    this.router.navigate(['/']);
          
  }
}
