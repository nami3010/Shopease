import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../shared/models/Product';
import { Helmet } from 'react-helmet'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})


export class HomeComponent implements OnInit {
  products: any = [];
  categories: any[] = [];

  selectedProduct?: Product;

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadAllProducts();
    this.loadAllCategories();
  }

  loadAllProducts() {
    this.products = this.productService
      .getAllProducts()
      .subscribe((products: any) => {
        console.log('products--', products?.data);
        this.products = products ? products.data.slice(0, 6) : [];
      });
  }

  loadAllCategories() {
    this.productService.getAllCategories().subscribe((categories: any) => {
      console.log('categores--', categories?.data);
      this.categories = categories ? categories.data : [];
    });
  }

  openModel(product: Product) {
    this.selectedProduct = product;
  }
}
