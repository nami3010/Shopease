import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminCustomersComponent } from './components/admin-customers/admin-customers.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { adminAuthGuard } from './Guard/admin-auth.guard';
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';
import { AdminAddCategoryComponent } from './components/admin-add-category/admin-add-category.component';
import { AdminAddProductComponent } from './components/admin-add-product/admin-add-product.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'admin-home', component: AdminHomeComponent,canActivate:[adminAuthGuard] },
      { path: 'admin-products', component: AdminProductsComponent },
      { path: 'admin-customers', component: AdminCustomersComponent },
      { path: 'admin-orders', component: AdminOrdersComponent },
      { path: 'admin-categories', component: AdminCategoriesComponent },
      { path: 'admin-add-category', component: AdminAddCategoryComponent },
      { path: 'admin-add-products', component: AdminAddProductComponent },
      {
        path: '',
        redirectTo: '/admin/admin-home',
        pathMatch: 'full',
      },
    ],
  },
  { path: 'login', component: LoginComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
