import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    constructor(private http: HttpClient) {}
  
    registerUser(userDto: any) {
      return this.http.post('/api/register', userDto);
    }
  
    loginUser(loginDto: any) {
      return this.http.post('/api/login', loginDto);
    }
  }