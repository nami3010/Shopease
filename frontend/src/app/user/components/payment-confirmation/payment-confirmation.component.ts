import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.css'],
})
export class PaymentConfirmationComponent implements OnInit {
  transactionId!: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.transactionId = sessionStorage
      ? sessionStorage.getItem('transaction-id')
      : '';
  }

  shopAgain(){
    sessionStorage.removeItem('transaction-id');
   this.router.navigateByUrl('/user/home');
  }
}
