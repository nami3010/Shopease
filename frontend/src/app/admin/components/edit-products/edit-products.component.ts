import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {

  inputData:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private ref:MatDialogRef<EditProductsComponent>){

  }

  nice =['mohit'];

  ngOnInit() {
    this.inputData = this.data;
  }

  closepopup(){
    this.ref.close()
  }

  saveData(){
    this.ref.close(this.inputData)
  }
}
