import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { sample_categories, sample_products } from 'src/data';
import { Observable } from 'rxjs';
import { Category } from '../shared/models/category';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getAll(): Product[] {
    return sample_products;
  }

  getAllPrductsBySearch(searchTerm: string) {
    return this.getAll().filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getProductsById(productId: string): Product {
    return this.getAll().find((prod) => prod.id == productId) ?? new Product();
  }

  getAllCategories():Category[]{
    return sample_categories;
  }

  getProductsByCategory(categoryName: string) {
    return categoryName.toLowerCase() == 'all'
      ? this.getAll()
      : this.getAll().filter(
          (product) =>
            product.category.toLowerCase() === categoryName.toLowerCase()
        );
  }

  loadResources(){
    var urlParams:any = [];
    window.location.search.replace("?", "").split("&").forEach(function (e, i) {
        var p = e.split("=");
        urlParams[p[0]] = p[1];
    });

    // We have all the params now -> you can access it by name
    console.log(urlParams["loaded"]);

    if(urlParams["loaded"]) {}else{

        let win = (window as any);
        win.location.search = '?loaded=1';
        //win.location.reload('?loaded=1');
    }
  }
}
