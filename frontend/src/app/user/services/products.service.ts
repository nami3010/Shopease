import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { sample_categories, sample_products } from 'src/data';
import { Observable, catchError, map, throwError, tap, BehaviorSubject } from 'rxjs';
import { Category } from '../shared/models/category';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ToastService } from '../../user/services/toast.service';
import {
  TOAST_ICONS,
  TOAST_STATE,
} from '../../user/shared/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  
  public cartContent = new BehaviorSubject<any>([]);    
  public cartData = this.cartContent.asObservable();    


  authorization = JSON.parse(
    JSON.stringify(localStorage.getItem('amazon_user'))
  );
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: JSON.parse(this.authorization).token,
    }),
    observe: 'response',
  };

  constructor(private http: HttpClient, public toast: ToastService) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8000/product/list');
  }

  getAllPrductsBySearch(searchTerm: string): Observable<any[]> {
    return this.getAllProducts().pipe(
      map((res: any) => {
        const products = res?.data;
        const filteredProducts = products.filter((product: any) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        console.log('filteredProducts', filteredProducts);
        return filteredProducts;
      })
    );
  }

  getProductsById(productId: string): any {
    return this.http.get<any[]>(
      'http://localhost:8000/product/get/' + productId
    );
  }

  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8000/category/list');
  }

  getProductsByCategory(categoryId: string) {
    return this.http
      .get<any[]>('http://localhost:8000/product/getByCat/' + categoryId)
      .pipe(
        catchError((error) => {
          console.log(error);
          this.toast.showToast(
            TOAST_STATE.danger,
            'Internal server error',
            TOAST_ICONS.danger
          );
          return throwError(() => new Error('Internal server error')); // Return an observable to handle the error
        })
      );
  }

  addToCart(product: any, count: number) {
    /*
    {
    "productId":"65710629be9bc28eda113ca7",
    "count":1
}
    */
    console.log(product._id);
    console.log(count);

    const cartItem = {
      productId: product._id,
      count: count,
    };
    return this.http
      .post<any[]>('http://localhost:8000/user/addToCart', cartItem, {
        headers: this.httpOptions.headers,
      })
      .pipe(
        catchError((error) => {
          console.log(error);
          this.toast.showToast(
            TOAST_STATE.danger,
            'Internal server error',
            TOAST_ICONS.danger
          );
          return throwError(() => new Error('Internal server error')); // Return an observable to handle the error
        })
      );
  }

  getAllCartItems() {
    return this.http.get<any[]>('http://localhost:8000/user/getfromCart', {
      headers: this.httpOptions.headers,
    });
  }

  deleteCartItemUSer(prodId: any) {
    return this.http.post<any[]>(
      'http://localhost:8000/user/removefromCart',
      { productId: prodId },
      {
        headers: this.httpOptions.headers,
      }
    );
  }

  updateCartItemUser(cartItem: any) {
    /*
    {
    "cartId":"657a69ab5fef8a6b8d87b21b",
    "count":2
    }
    */
    const cartObj = {
      cartId: cartItem._id,
      count: cartItem.count,
    };
    console.log('cartObj', cartObj);

    return this.http.post<any[]>(
      'http://localhost:8000/user/updateCart',
      cartObj,
      {
        headers: this.httpOptions.headers,
      }
    );
  }

  loadResources() {
    var urlParams: any = [];
    window.location.search
      .replace('?', '')
      .split('&')
      .forEach(function (e, i) {
        var p = e.split('=');
        urlParams[p[0]] = p[1];
      });

    // We have all the params now -> you can access it by name
    console.log(urlParams['loaded']);

    if (urlParams['loaded']) {
    } else {
      let win = window as any;
      win.location.search = '?loaded=1';
      //win.location.reload('?loaded=1');
    }
  }

  getAllCountries() {}
}
