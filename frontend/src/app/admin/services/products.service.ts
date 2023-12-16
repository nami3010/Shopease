import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

import { API_BASE_URL } from '../../utils/constants';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
   authorization = JSON.parse(
    JSON.stringify(localStorage.getItem('amazon_admin'))
  );
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': '',
      Authorization: JSON.parse(this.authorization).token,
    }),
    observe: 'response',
  };

  httpOptions1 = {
    headers: new HttpHeaders({
      Authorization: JSON.parse(this.authorization).token,
    }),
    observe: 'response',
  };
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(API_BASE_URL+'/product/list');
  }

  addProduct(catObj: any): Observable<any[]> {
    return this.http.post<any[]>(API_BASE_URL+'/product/add', catObj, {
      headers: this.httpOptions1.headers,
    });
  }

  getUSers(){
    return this.http.get<any[]>(API_BASE_URL+'/user/list',{headers:this.httpOptions.headers});
  }

  /*
  {
    "name":"Automotive and Tools",
    "description":"Keep your vehicle in top condition and tackle DIY projects with automotive and tools. Find car accessories, maintenance tools, and a variety of equipment for home improvement projects."

}
  */
}
