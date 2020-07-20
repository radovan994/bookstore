import { Order } from './../modeli/order';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookList } from '../modeli/bookList'

const url = "http://localhost:3000/api/books"

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient) { }

  GetAllBooks(params?:any):Observable<BookList>{
    let queryParams = {};
    if(params){
      queryParams = {
        params: new HttpParams()
        .set("discount", params.discount || "")
        .set("bestseller", params.bestseller || "")
      }
    }
    return this.http.get(url, queryParams).pipe(map(x => {
      return new BookList(x);
    }));
  }

  SubmitOrder(order:Order):Observable<Order>{
    return this.http.post("http://localhost:3000/api/orders/", order).pipe(
      map( x =>{return new Order(x)})
    )
  }
}
