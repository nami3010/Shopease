import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../../services/toast.service';
import { AuthService } from '../../../services/auth.service';
import { TOAST_ICONS, TOAST_STATE } from '../../../shared/constants/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'user-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public toast: ToastService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    const user = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value,
    };
    this.authService.login(user).subscribe((res: any) => {
      debugger;
      if (res.code == 200) {
        this.router.navigateByUrl('');
      } else {
        this.toast.showToast(
          TOAST_STATE.danger,
          res.message,
          TOAST_ICONS.danger
        );
      }
    });
  }
}
