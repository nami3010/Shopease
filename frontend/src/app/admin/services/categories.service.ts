import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }


  getAllCategories():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8000/category/list");
  }

  addCategory(catObj:Category):Observable<any[]>{
    return this.http.post<any[]>("http://localhost:8000/category/add",catObj);
  }

  /*
  {
    "name":"Automotive and Tools",
    "description":"Keep your vehicle in top condition and tackle DIY projects with automotive and tools. Find car accessories, maintenance tools, and a variety of equipment for home improvement projects."

}
  */

}
