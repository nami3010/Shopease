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
  products: Product[] = [];
  categories: Category[] = [];
  itemsPerPage: number = 8;
  p: number = 1;

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //this.productService.loadResources();

    this.products = this.productService.getAll();
    this.categories = this.productService.getAllCategories();
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
