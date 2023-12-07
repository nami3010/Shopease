import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/Product';
import { ProductsService } from '../../../services/products.service';
import * as countriesData from '../../../../../assets/js/countries.json';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  countries: any;
  url: string = '../../../../../assets/js/countries.json';

  constructor(private http: HttpClient, private prodService:ProductsService) {
  }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.countries = res;
    });
  }
}
