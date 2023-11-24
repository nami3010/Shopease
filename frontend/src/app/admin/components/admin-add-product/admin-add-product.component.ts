import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css'],
})
export class AdminAddProductComponent implements OnInit {
  catForm!: FormGroup;

  constructor(
    private catService: ProductsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.catForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addProduct() {
    const catObj = {
      name: this.catForm.controls.name.value,
      description:  this.catForm.controls.description.value,
    };
    this.catService.addProduct(catObj).subscribe((categories: any) => {
      console.log('products--', categories?.data);
    });
  }
}
