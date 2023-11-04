import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ToastService } from '../../../services/toast.service';
import {
  TOAST_ICONS,
  TOAST_STATE,
} from '../../../../user/shared/constants/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public toast: ToastService
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      fname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      dob: ['', Validators.required],
    });
  }

  register() {
    const user = {
      name: this.registrationForm.controls.fname.value,
      email: this.registrationForm.controls.email.value,
      password: this.registrationForm.controls.password.value,
      age: this.calculateAge(this.registrationForm.controls.dob.value),
    };
    this.authService.register(user).subscribe((res: any) => {
      if (res) {
        if (res.code == 200) {
          this.toast.showToast(
            TOAST_STATE.success,
            res.message,
            TOAST_ICONS.success
          );
        } else {
          this.toast.showToast(
            TOAST_STATE.warning,
            res.message,
            TOAST_ICONS.warning
          );
        }
      } else {
        this.toast.showToast(
          TOAST_STATE.danger,
          res.message,
          TOAST_ICONS.danger
        );
      }
    });
  }
  /*
  {
    "code": 200,
    "message": "User created successfully",
    "data": {
        "name": "Chibi",
        "email": "chibi@gmail.com",
        "password": "$2b$10$wBJYlrtlo9JYlBiN7LrnduI4koL76J.S8NYO3DWHIe7WWg3muJvHK",
        "age": 27,
        "isDeleted": false,
        "accountType": "customer",
        "status": "ACTIVE",
        "_id": "653ef97e8aebfb0879caab0d",
        "__v": 0
    }
}
  
  */

  calculateAge(dateOfBirth: string) {
    const dob = new Date(dateOfBirth); // Parse the date of birth
    const today = new Date(); // Get the current date
    // Calculate the age
    let age = today.getFullYear() - dob.getFullYear();

    // Check if the birthday has occurred this year
    if (
      today.getMonth() < dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
    ) {
      age--;
    }
    return age;
  }
}
