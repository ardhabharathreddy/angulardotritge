import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  getCartProducts(id: any) {
    return this.httpClient.get("https://fakestoreapi.com/products"+"/"+id);
  }
  getProducts():Observable<any>{
    return this.httpClient.get("https://fakestoreapi.com/products");
  }
  constructor(private httpClient:HttpClient) { }
}
