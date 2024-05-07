import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalog } from './catalog';
import { Product } from '../product/product';


@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private baseUrl = 'http://localhost:8080/api/catalogs';

  constructor(private http: HttpClient) { }

  getCatalog(id: number): Observable<Catalog> {
    return this.http.get<Catalog>(`${this.baseUrl}/${id}`);
  }
  getCatalogList(): Observable<Catalog[]>{
    return this.http.get<Catalog[]>(`${this.baseUrl}`);
  }
  getProductListByCatalogId(catalogId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/catalog/${catalogId}`);
  }

 
}
