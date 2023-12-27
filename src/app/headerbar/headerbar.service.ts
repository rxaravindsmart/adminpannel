import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class HeaderbarService {

  constructor(private http:HttpClient) { }
  public getProducts(): Observable<any> {
    const url = 'https://fakestoreapi.com/products?limit=7';
    return this.http.get<any>(url);
  }
  public getJwellary(): Observable<any> {
    const url = 'https://fakestoreapi.com/products/category/jewelery';
    return this.http.get<any>(url);
  }
  public getDelivery(): Observable<any> {
    const url = 'https://fakestoreapi.com/products?limit=4';
    return this.http.get<any>(url);
  }
  public getDeliveryUsers(): Observable<any>{
    const url ='https://fakestoreapi.com/users?limit=4';
    return this.http.get<any>(url)
  }
}
