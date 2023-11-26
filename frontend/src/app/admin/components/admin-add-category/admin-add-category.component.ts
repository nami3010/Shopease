import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../../services/categories.service';
import { ToastService } from '../../../user/services/toast.service';
import { TOAST_ICONS, TOAST_STATE } from '../../../user/shared/constants/constants';

@Component({
  selector: 'app-admin-add-category',
  templateUrl: './admin-add-category.component.html',
  styleUrls: ['./admin-add-category.component.css'],
})
export class AdminAddCategoryComponent implements OnInit {
  catForm!: FormGroup;
  loading:boolean = false;

  constructor(
    private catService: CategoriesService,
    private formBuilder: FormBuilder,
    public toast: ToastService
  ) {}

  ngOnInit(): void {
    this.catForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addCategory() {
    this.loading = true;
    const catObj = {
      name: this.catForm.controls.name.value,
      description:  this.catForm.controls.description.value,
    };
    this.catService.addCategory(catObj).subscribe((categories: any) => {
      console.log('categores--', categories?.data);
      console.log('error--', categories);
      if(categories.code == 200){
        this.loading = false;
        this.toast.showToast(
          TOAST_STATE.success,
          "Category added successfully!!",
          TOAST_ICONS.success
        );
      }else{
        this.loading = false;
        this.toast.showToast(
          TOAST_STATE.danger,
          categories.message.message,
          TOAST_ICONS.danger
        );
      }
    });
  }
}
