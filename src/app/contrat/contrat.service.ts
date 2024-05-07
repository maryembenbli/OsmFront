// contrat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contrat } from './contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratService {
    private baseUrl = 'http://localhost:8080/api/contrats';

  constructor(private http: HttpClient) { }

  getAllContrats(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  createContrat(contrat: Contrat): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, contrat);
  }
    // Method to check if NCIN and NTEL already exist
    /*checkUnique(ncin: string, ntel: string): Observable<{ ncinExists: boolean, ntelExists: boolean }> {
      return this.http.post<{ ncinExists: boolean, ntelExists: boolean }>(`${this.baseUrl}/contracts/check-unique`, { ncin, ntel });
    }*/
    getContrat(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/${id}`);
    }
    updateContrat(id: number, contrat: any): Observable<any> {
      return this.http.put(`${this.baseUrl}/${id}`, contrat);
    }
    deleteContrat(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`);
    }
}