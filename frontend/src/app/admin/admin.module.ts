import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgIf, NgFor } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminCustomersComponent } from './components/admin-customers/admin-customers.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';

@NgModule({
  declarations: [
    LoginComponent,
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    AdminHomeComponent,
    SideNavComponent,
    SidebarComponent,
    AdminProductsComponent,
    AdminCustomersComponent,
    AdminOrdersComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    NgIf,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    NgFor,
    MatSlideToggleModule,
  ],
})
export class AdminModule {}
