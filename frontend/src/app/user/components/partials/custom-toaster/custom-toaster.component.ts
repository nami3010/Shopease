import { Component, OnInit, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-custom-toaster',
  templateUrl: './custom-toaster.component.html',
  styleUrls: ['./custom-toaster.component.css']
})
export class CustomToasterComponent implements OnInit {  
  toastClass = ['toast-class']; 
  toastMessage = 'This is a toast'; // This is the string the template is already bound to  
  constructor(public toast: ToastService) { }  


  ngOnInit(): void { }

  dismiss(){
    this.toast.dismissToast();
  }

}
