import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css'],
})

export class AdminAddProductComponent implements OnInit {
  catForm!: FormGroup;
  categories: any[] = [];
  accept:string ='image/*';
  fileToUpload: any | null = null;
  

  constructor(
    private prodService: ProductsService,
    private formBuilder: FormBuilder,
    private categoriesService:CategoriesService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadAllCategories();
    this.catForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      photo: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      basicfile:''
    });
  }

  loadAllCategories(){
    this.categoriesService.getAllCategories().subscribe((categories: any) => {
      console.log('categores--', categories?.data);
      this.categories = categories ? categories.data : [];
    });
  }

  /*
  {
    "name":"ThinkPad X1 Carbon Gen 11 Intel (14”) - Black",
    "email":"user1@gmail.com",
    "category":{},
    "age":25,
    "dob":"18/09/1999",
    "price":100,
    "photo":"https://p2-ofp.static.pub/ShareResource/na/products/thinkpad/400x300/lenovo-thinkpad-x1-carbon-gen-11-2023.png",
    "description":"test products"

}
  */

onFileChange(event:any) {
  const reader = new FileReader();

  if(event.target.files && event.target.files.length) {
    const [file] = event.target.files;
    reader.readAsDataURL(file);

    reader.onload = () => {
      this.catForm.patchValue({
        photo: reader.result
     });
    
      // need to run CD since file load runs outside of zone
      this.cd.markForCheck();
    };
  }
}

handleFileInput(event: any) {
  if(event){
    this.fileToUpload = event.target.files.item(0)
  }
}

  addProduct() {
    const catObj = {
      name: this.catForm.controls.name.value,
      price: this.catForm.controls.price.value,
      photo: this.fileToUpload,
      category: this.catForm.controls.category.value,
      description:  this.catForm.controls.description.value,
    };

    console.log('file to upload', this.fileToUpload)

    const formData = new FormData();

    formData.append('name', this.catForm.controls.name.value);
    formData.append('price', this.catForm.controls.price.value);
    formData.append('email', 'mohit@gmail.com');
    formData.append('photo', this.fileToUpload);
    formData.append('category', this.catForm.controls.category.value);
    formData.append('description', this.catForm.controls.description.value);

    console.log("foodData data is--->",this.catForm.controls.photo.value);
    console.log("foodData data is--->",formData);
    this.prodService.addProduct(formData).subscribe((categories: any) => {
      console.log('products--', categories?.data);
    });
  }
}
