import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../shared/models/Product';
import { Category } from '../../../shared/models/category';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  products: any[] = [];
  categories: Category[] = [];
  itemsPerPage: number = 8;
  p: number = 1;

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAllProducts();
    this.loadAllCategories();
    //this.products = this.productService.getAll();
    //this.categories = this.productService.getAllCategories();
  }

  loadAllProducts(){
    this.productService.getAllProducts().subscribe((products:any)=>{
      console.log('products--',products?.data);
      this.products = products? products.data:[];
    })
  }

  loadAllCategories(){
    this.productService.getAllCategories().subscribe((categories:any)=>{
      console.log('categores--',categories?.data);
      this.categories = categories? categories.data:[];
    })
  }

  search(term: string) {
    if (term) {
      this.products = this.productService.getAllPrductsBySearch(term);
    } else {
      this.products = this.productService.getAll();
      this.router.navigateByUrl('/shop');
    }
  }
}
