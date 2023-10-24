import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  selectedProduct?: Product;

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getAll();
  }

  openModel(product: Product) {
    this.selectedProduct = product;
  }

  search(term: string) {
    if (term) {
      this.products = this.productService.getAllPrductsBySearch(term);
    } else {
      this.products = this.productService.getAll();
      this.router.navigateByUrl('');
    }
  }
}
