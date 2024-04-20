import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  /*private baseUrl = 'http://localhost:8080/api/profile';

  constructor(private http: HttpClient) { }

  getGroupsByProfileId(profileId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${profileId}/groups`);
  }*/


  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getProfilesAndGroups(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/profile`);
  }
}

