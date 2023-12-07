import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { SearchComponent } from './components/partials/search/search.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { ProductPopupComponent } from './components/pages/product-popup/product-popup.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingComponent } from './components/dashboard-routing/dashboard-routing.component';
import { CustomToasterComponent } from './components/partials/custom-toaster/custom-toaster.component';
import { AuthService } from './services/auth.service';
import { ToastService } from './services/toast.service';
import { CartComponent } from './components/pages/cart/cart.component';
import { ProductsService } from './services/products.service';
import { UserAboutusComponent } from './components/pages/user-aboutus/user-aboutus.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SearchComponent,
    ShopComponent,
    ProductDetailsComponent,
    ProductPopupComponent,
    LoginComponent,
    RegisterComponent,
    DashboardRoutingComponent,
    CustomToasterComponent,
    CartComponent,
    UserAboutusComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[CustomToasterComponent],
  providers:[AuthService,ToastService,ProductsService]
})
export class UserModule { }
