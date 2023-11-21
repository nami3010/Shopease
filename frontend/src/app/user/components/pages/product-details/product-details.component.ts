import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../shared/models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  constructor(activatedRoute: ActivatedRoute,private productService: ProductsService) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.product = productService.getProductsById(params.id);
      }
    });
  }

  ngOnInit() {
  }
}
