import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminCustomersComponent } from './components/admin-customers/admin-customers.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'admin-home', component: AdminHomeComponent },
      { path: 'admin-products', component: AdminProductsComponent },
      { path: 'admin-customers', component: AdminCustomersComponent },
      { path: 'admin-orders', component: AdminOrdersComponent },
      {
        path: '',
        redirectTo: '/admin/login',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
