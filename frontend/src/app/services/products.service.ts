import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { sample_products } from 'src/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getAll(): Product[] {
    return sample_products;
  }

  getAllPrductsBySearch(searchTerm:string){
    return this.getAll().filter(product=>product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  // getProductsById(productId:string){
  //   return this.getAll().find(prod=>prod.id == productId)?? new Product();
  // }
  getProductsById(productId:string){
    return this.getAll().find(prod=>prod.id == productId)?? new Product();
  }
}
