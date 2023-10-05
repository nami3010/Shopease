import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  selectedProduct?:Product;

  constructor(
    private productService: ProductsService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.products = this.productService.getAllPrductsBySearch(
          params.searchTerm
        );
      else this.products = this.productService.getAll();
    });
  }

  ngOnInit(): void {}

  openModel(product:Product){
   this.selectedProduct = product;
  }

}
