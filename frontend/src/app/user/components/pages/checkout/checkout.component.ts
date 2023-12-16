import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/Product';
import { ProductsService } from '../../../services/products.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../../services/toast.service';
import { AuthService } from '../../../services/auth.service';
import { TOAST_ICONS, TOAST_STATE } from '../../../shared/constants/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  countries: any;
  url: string = '../../../../../assets/js/countries.json';
  cartItems: any[] = [];
  products: any = [];
  productIds: any = [];
  cartProductDetails: any = [];
  mergedArray: any = [];
  quantity: any = 1;
  cartTotal: any = 0;
  checkoutForm!: FormGroup;

  constructor(
    private http: HttpClient,
    private prodService: ProductsService,
    private formBuilder: FormBuilder,
    public toast: ToastService,
    private router:Router
  ) {}

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      company: [''],
      country: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
    });

    this.http.get(this.url).subscribe((res) => {
      this.countries = res;
    });

    this.loadCartItems();
  }

  loadCartItems() {
    this.prodService.getAllCartItems().subscribe((cartItems: any) => {
      console.log('cartItems--', cartItems?.data);
      this.cartItems = cartItems
        ? cartItems.data.filter((data: any) => data.productId)
        : [];
      const productIds = this.cartItems
        .map((item) => item.productId)
        .filter(Boolean);
      console.log('productIds', productIds);
      this.productIds = productIds;
      this.loadProducts();
    });
  }

  loadProducts() {
    this.prodService.getAllProducts().subscribe((products: any) => {
      this.products = products ? products.data : [];
      // Filter elements based on productIds
      const filteredData = this.products.filter((item: any) =>
        this.productIds.includes(item._id)
      );
      this.cartProductDetails = filteredData;
      console.log('cartProductDetails--', this.cartProductDetails);
      this.loadMergedArray();
    });
  }

  loadMergedArray() {
    const mergedArray = this.cartProductDetails.map((product: any) => {
      const cartItem = this.cartItems.find(
        (cart) => cart.productId === product._id
      );
      return cartItem ? { ...product, cartItem } : product;
    });

    this.mergedArray = mergedArray;

    console.log(mergedArray);
    this.calculatePrdTotal();
  }

  calculatePrdTotal() {
    const updatedArray = this.mergedArray.map((product: any) => ({
      ...product,
      prodTotal: product.cartItem.count * product.price,
    }));
    this.mergedArray = updatedArray;
    console.log('updatex--', updatedArray);
    this.calculateCartTotal();
  }

  calculateCartTotal() {
    const totalCartPrice = this.mergedArray.reduce(
      (total: any, product: any) => total + product.prodTotal,
      0
    );
    console.log('totalCartPrice--', totalCartPrice);
    this.cartTotal = totalCartPrice.toFixed(2);
  }

  placeOrder(){
    sessionStorage.setItem('cart-total',this.cartTotal);
    this.router.navigateByUrl('/user/payment-gateway');
  }
}
