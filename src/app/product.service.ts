import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './sevice/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000'; // Replace with your backend API URL

  constructor(private http: HttpClient,private autthservice:AuthService) { }

  getProducts(): Observable<any> {
   const accessToken=this.autthservice.getUserDetails().token;
    const headers = new HttpHeaders({
      'accessToken': accessToken,
      'Content-Type': 'application/json;charset=utf-8'
    });
    
    return this.http.get<any>(this.apiUrl+"/Allproducts",{ headers: headers });
  }
  removeProducts(id:any): Observable<any> {
    const accessToken=this.autthservice.getUserDetails().token;
    const headers = new HttpHeaders({
      'accessToken': accessToken,
      'Content-Type': 'application/json;charset=utf-8'
    });
    
    return this.http.delete<any>(this.apiUrl+"/productDelete/"+id,{ headers: headers });
  }
}
