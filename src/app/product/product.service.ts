import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = 'http://localhost:8080/api/products';

  constructor(private http : HttpClient) { }
  getProductList(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseURL}`);
  }
  searchProductById(idProduit: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseURL}/search?idProduit=${idProduit}`);
  }
  getProductListByNature(nature: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseURL}/searchnature?natureProduit=${nature}`);
  }
  getProductListByCatalogId(catalogId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseURL}/catalog/${catalogId}`);
  }
}
