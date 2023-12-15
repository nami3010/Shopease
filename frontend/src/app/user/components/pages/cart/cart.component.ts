import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../shared/models/Product';
import { ToastService } from '../../../services/toast.service';
import { TOAST_ICONS, TOAST_STATE } from '../../../shared/constants/constants';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  products: any = [];
  productIds: any = [];
  cartProductDetails: any = [];
  mergedArray: any = [];
  quantity: any = 1;
  cartTotal: any = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    public toast: ToastService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCartItems();
  }

  loadCartItems() {
    this.productService.getAllCartItems().subscribe((cartItems: any) => {
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
    this.productService.getAllProducts().subscribe((products: any) => {
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

  deleteCartProd(prodId: any) {
    console.log('prodid', prodId);
    this.productService.deleteCartItemUSer(prodId).subscribe((res: any) => {
      console.log('res', res);
      if (res) {
        if (res.code == 200) {
          this.loadCartItems();
          this.toast.showToast(
            TOAST_STATE.success,
            res.message ? res.message : 'Product removed from cart!',
            TOAST_ICONS.success
          );
        } else {
          this.toast.showToast(
            TOAST_STATE.danger,
            'Delete action failed',
            TOAST_ICONS.danger
          );
        }
      }
    });
  }

  changeQuantity(action: string, items: any) {
    console.log('inside change quaantity', items);

    const findProdToUpdate = this.mergedArray.find(
      (prod: any) => prod._id === items._id
    );

    console.log('findProdToUpdate', findProdToUpdate._id);

    // Find the index of the product with the specified productId in the mergedArray
    const productIndex = this.mergedArray.findIndex(
      (product: any) => product._id === findProdToUpdate._id
    );

    switch (action) {
      case 'inc':
        if (this.quantity < 10)
          if (productIndex !== -1) {
            // Update the count if the product is found
            this.mergedArray[productIndex].cartItem.count =
              items.cartItem.count + 1;
          }
        //this.quantity = this.quantity + 1;
        break;
      case 'dec':
        if (this.quantity > 0 && this.quantity != 0)
          if (productIndex !== -1) {
            this.mergedArray[productIndex].cartItem.count =
              items.cartItem.count - 1;
          }
        console.log(this.mergedArray);
        //this.quantity = this.quantity - 1;
        break;
      default:
        this.quantity = this.quantity;
    }

    this.calculatePrdTotal();

    console.log('merged array', this.mergedArray);
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

  calculateCartTotal(){
    const totalCartPrice = this.mergedArray.reduce((total:any, product:any) => total + product.prodTotal, 0);
    console.log('totalCartPrice--', totalCartPrice);
    this.cartTotal = totalCartPrice.toFixed(2);
  }

  updateCart(items: any) {
    console.log('items', items.cartItem);
    this.productService.updateCartItemUser(items.cartItem).subscribe((res: any) => {
      console.log('res', res);
      if (res) {
        if (res.code == 200) {
          this.loadCartItems();
          this.toast.showToast(
            TOAST_STATE.success,
            res.message ? res.message : 'Cart Updated!',
            TOAST_ICONS.success
          );
        } else {
          this.toast.showToast(
            TOAST_STATE.danger,
            'Cart Update failed',
            TOAST_ICONS.danger
          );
        }
      }
    });
  }
}
