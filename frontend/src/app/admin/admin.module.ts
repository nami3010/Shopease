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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ToastService } from '../user/services/toast.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { UserModule } from '../user/user.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';
import { AdminAddCategoryComponent } from './components/admin-add-category/admin-add-category.component';
import { CategoriesService } from './services/categories.service';
import { AdminAddProductsComponent } from './components/admin-add-products/admin-add-products.component';

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
    AdminCategoriesComponent,
    AdminAddCategoryComponent,
    AdminAddProductsComponent,
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
    MatExpansionModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  providers: [AuthService, ToastService, CategoriesService],
})
export class AdminModule {}
