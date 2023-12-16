import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  products: any = [];
  categories:any=[];
  users:any=[]
  events: string[] = [];
  opened!: boolean;
  isExpanded: boolean = false;

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(
    window.location.host
  );

  constructor(private prodServce: ProductsService) {}

  ngOnInit() {
    this.loadAllProducts();
    this.loadAllCategories();
    this.loadAllUsers();
  }

  loadAllProducts() {
    this.prodServce.getAllProducts().subscribe((res: any) => {
      this.products = res ? res.data : [];
    });
  }

  loadAllCategories() {
    this.prodServce.getAllCategories().subscribe((categories: any) => {
      this.categories = categories ? categories.data : [];
    });
  }

  loadAllUsers() {
    this.prodServce.getUSers().subscribe((user: any) => {
      this.users = user ? user.data : [];
    });
  }
}
