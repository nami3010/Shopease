import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-admin-add-category',
  templateUrl: './admin-add-category.component.html',
  styleUrls: ['./admin-add-category.component.css'],
})
export class AdminAddCategoryComponent implements OnInit {
  catForm!: FormGroup;

  constructor(
    private catService: CategoriesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.catForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addCategory() {
    const catObj = {
      name: this.catForm.controls.name.value,
      description:  this.catForm.controls.description.value,
    };
    this.catService.addCategory(catObj).subscribe((categories: any) => {
      console.log('categores--', categories?.data);
    });
  }
}
