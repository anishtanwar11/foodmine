import { Injectable } from '@angular/core';
import { Order } from '../shared/models/Order';
import { HttpClient } from '@angular/common/http';
import { ORDER_CREATE_URL, ORDER_NEW_FROM_NEW_USER_URL } from '../shared/constants/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  create(order:Order){
    return this.http.post<Order>(ORDER_CREATE_URL, order); 
  }

  getNewOrderFromCurrentUser():Observable<Order>{
    return this.http.get<Order>(ORDER_NEW_FROM_NEW_USER_URL);
  }
}
