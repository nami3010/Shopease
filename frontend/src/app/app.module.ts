import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { SearchComponent } from './components/partials/search/search.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './components/pages/shop/shop.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { ProductPopupComponent } from './components/pages/product-popup/product-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SearchComponent,
    ShopComponent,
    ProductDetailsComponent,
    ProductPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
