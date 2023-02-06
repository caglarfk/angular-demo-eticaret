import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { Category } from './category.model';
import { Navbar } from './navbar.model';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl: string = "http://localhost:8000/";
  constructor(private http: HttpClient) { }

getProducts():Observable<Product[]>{
  return this.http.get<Product[]>(this.baseUrl+"products");
}

getCategories():Observable<Category[]>{
  return this.http.get<Category[]>(this.baseUrl+"categories")
}
 getNavbars():Observable<Navbar[]>{
  return this.http.get<Navbar[]>(this.baseUrl+"navbar")
} 
saveOrder(order: Order): Observable<Order> {
  return this.http.post<Order>(this.baseUrl+'orders', order);
}
}
