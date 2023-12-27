import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  public getAllorder(): Observable<any> {
    const url = 'https://fakestoreapi.com/products?limit=10';
    return this.http.get<any>(url);
  }
  public getAllorderUsers(): Observable<any>{
    const url ='https://fakestoreapi.com/users?limit=10';
    return this.http.get<any>(url)
  }
  public getDispatch(): Observable<any> {
    const url = 'https://fakestoreapi.com/products?limit=3';
    return this.http.get<any>(url);
  }
  public getDispatchUsers(): Observable<any>{
    const url ='https://fakestoreapi.com/users?limit=3';
    return this.http.get<any>(url)
  }
  public getPending(): Observable<any> {
    const url = 'https://fakestoreapi.com/products?limit=4';
    return this.http.get<any>(url);
  }
  public getPendingUsers(): Observable<any>{
    const url ='https://fakestoreapi.com/users?limit=4';
    return this.http.get<any>(url)
  }
  public getCompleted(): Observable<any> {
    const url = 'https://fakestoreapi.com/products?limit=5';
    return this.http.get<any>(url);
  }
  public getCompletedUsers(): Observable<any>{
    const url ='https://fakestoreapi.com/users?limit=5';
    return this.http.get<any>(url)
  }
}
