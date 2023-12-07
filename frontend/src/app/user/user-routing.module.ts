import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { ProductPopupComponent } from './components/pages/product-popup/product-popup.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { DashboardRoutingComponent } from './components/dashboard-routing/dashboard-routing.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { UserAboutusComponent } from './components/pages/user-aboutus/user-aboutus.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardRoutingComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
      { path: 'popoup/:id', component: ProductPopupComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'category/:cat-id', component: ShopComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'about-us', component: UserAboutusComponent },
      {
        path: '',
        redirectTo: '/user/home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
