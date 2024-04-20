// history.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { History } from './history';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private apiUrl = 'http://localhost:8080/api/user/history';

  constructor(private http: HttpClient) { }

  getHistoryList(): Observable<History[]> {
    return this.http.get<History[]>(this.apiUrl);
  }
}
