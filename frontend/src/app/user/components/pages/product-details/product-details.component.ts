import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../shared/models/Product';
import { ToastService } from '../../../services/toast.service';
import { TOAST_ICONS, TOAST_STATE } from '../../../shared/constants/constants';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any = [];
  quantity: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    public toast: ToastService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.productService.getProductsById(params.id).subscribe((res: any) => {
          this.product = res
            ? res.data
            : [];
        });
      }
    });
  }

  changeQuantity(action: string) {
    switch (action) {
      case 'inc':
        if (this.quantity < 10) this.quantity = this.quantity + 1;
        break;
      case 'dec':
        if (this.quantity > 0 && this.quantity != 1)
          this.quantity = this.quantity - 1;
        break;
      default:
        this.quantity = this.quantity;
    }
  }

  addtoCart(product: any) {
    console.log(product);
    this.productService.addToCart(product, this.quantity).subscribe((res: any) => {
      debugger;
      if (res.code == 200) {
        this.toast.showToast(
          TOAST_STATE.success,
          res.message,
          TOAST_ICONS.success
        );
        this.router.navigateByUrl('/user/cart')
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
