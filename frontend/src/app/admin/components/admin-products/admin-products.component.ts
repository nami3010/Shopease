import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from '../../services/products.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent {
  displayedColumns: string[] = ['position', 'name', 'description', 'price', 'edit', 'delete'];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private prodService:ProductsService){
    prodService.getAllProducts().subscribe((products:any)=>{
      console.log('products--',products?.data);
        for (var i = 0; i < products.data.length; i++) {
          products.data[i].position = i+1; // Add "total": 2 to all objects in array
      }
      this.dataSource = new MatTableDataSource(products.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
      
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
