import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private http:HttpClient) { }
  public getMens(): Observable<any> {
    const url = `https://fakestoreapi.com/products/category/men's clothing`;
    return this.http.get<any>(url);
  }
  public getWomens(): Observable<any> {
    const url = `https://fakestoreapi.com/products/category/women's clothing`;
    return this.http.get<any>(url);
  }
  public getElectronic(): Observable<any> {
    const url = 'https://fakestoreapi.com/products/category/electronics';
    return this.http.get<any>(url);
  }
  public getJwellary(): Observable<any> {
    const url = 'https://fakestoreapi.com/products/category/jewelery';
    return this.http.get<any>(url);
  }


}
