import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../shared/models/Product';
import { Category } from '../../../shared/models/category';
import { ToastService } from '../../../services/toast.service';
import { TOAST_ICONS, TOAST_STATE } from '../../../shared/constants/constants';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  products: any = [];
  categories: any[] = [];
  itemsPerPage: number = 8;
  p: number = 1;

  constructor(
    private productService: ProductsService,
    private router: Router,
    public toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadAllProducts();
    this.loadAllCategories();
  }

  loadAllProducts() {
    this.productService.getAllProducts().subscribe((products: any) => {
      console.log('products--', products?.data);
      this.products = products ? products.data : [];
    });
  }

  loadAllCategories() {
    this.productService.getAllCategories().subscribe((categories: any) => {
      console.log('categores--', categories?.data);
      this.categories = categories ? categories.data : [];
    });
  }

  getProductsByCategory(catId: string) {
    console.log(catId);
    if(catId == '657d3aad4f78a6392c9cd69d'){
      this.loadAllProducts();
    }

    this.productService
      .getProductsByCategory(catId)
      .subscribe((products: any) => {
        console.log('products by cat--', products?.data);
        this.products = products ? products.data : [];
      });
  }

  search(term: string) {
    debugger;
    if (term) {
      this.productService
        .getAllPrductsBySearch(term)
        .subscribe((filteredProducts: any[]) => {
          // Handle the filtered products here
          this.products = filteredProducts;
        });
    } else {
      this.productService.getAllProducts().subscribe((res: any) => {
        this.products = res?.data;
      });
      this.router.navigateByUrl('/shop');
    }
  }

  addtoCart(product: any) {
    const count = 1;
    console.log(product);
    this.productService.addToCart(product, count).subscribe((res: any) => {
      if (res.code == 200) {
        this.toast.showToast(
          TOAST_STATE.success,
          res.message,
          TOAST_ICONS.success
        );
      } else {
        this.toast.showToast(
          TOAST_STATE.danger,
          res.message,
          TOAST_ICONS.danger
        );
      }
    });
  }
}
