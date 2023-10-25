import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      fname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  register() {
    console.log(this.registrationForm.value);
  }
}
