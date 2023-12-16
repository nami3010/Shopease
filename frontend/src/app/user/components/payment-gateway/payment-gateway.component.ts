import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css'],
})
export class PaymentGatewayComponent implements OnInit {
  amountToPay!: any;
  deliveryTime!: any;
  // Get the current date and time
  currentDateTime = new Date();
  // Get the current time in "hh:mm" format
  formattedTime = this.currentDateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    // Other options like second, timeZone, etc., can be added as needed
  });

  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;

  constructor(
    private authService: AuthService,
    private router: Router,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.amountToPay = sessionStorage.getItem('cart-total');
    console.log('price', sessionStorage.getItem('cart-total'));
    console.log(window.paypal);
    window.paypal
      .Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.amountToPay.toString(),
                  currency_code: 'CAD',
                },
              },
            ],
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            if (details.status == 'COMPLETED') {
              this.productService.clearCart().subscribe((res: any) => {
                console.log('res', res);
              });
              this.productService.storeTransactionDetails().subscribe((res: any) => {
                console.log('res', res);
              });
              sessionStorage.setItem('transaction-id', details.id);
              sessionStorage.removeItem('cartTotal');
              this.authService.transactionIdPayment = details.id;

              this.router.navigateByUrl('/user/payment-confirmation');
            }
          });
        },
        onError: (error: any) => {
          console.log(error);
        },
      })
      .render(this.paymentRef.nativeElement);
  }
}
