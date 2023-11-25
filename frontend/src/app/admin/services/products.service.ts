import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }


  getAllProducts():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8000/product/list");
  }

  addProduct(catObj:Product):Observable<any[]>{
    return this.http.post<any[]>("http://localhost:8000/product/add",catObj);
  }

  /*
  {
    "name":"Automotive and Tools",
    "description":"Keep your vehicle in top condition and tackle DIY projects with automotive and tools. Find car accessories, maintenance tools, and a variety of equipment for home improvement projects."

}
  */

}
