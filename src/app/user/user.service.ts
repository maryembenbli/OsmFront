import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/user'; 

  constructor(private http: HttpClient) { }

  // Method to register a new useHistoryr
  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }
  /*registerUserWithProfile(user: any, profilTitre: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/registerWithProfil?profilTitre=${profilTitre}`, user);
  }*/
  loginUser(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password }, { responseType: 'text' });
  }
  getUserList(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }
  searchUser(query: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users/search?query=${query}`);
  }
  updateUser(userId: number, user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${userId}`, user);
  }
  getUser(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${userId}`);
  }
  
 
}
