import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../../services/toast.service';
import { AuthService } from '../../../services/auth.service';
import { TOAST_ICONS, TOAST_STATE } from '../../../shared/constants/constants';
import { Router } from '@angular/router';
import { VoiceRecognitionService } from '../../../services/voice-recognition.service';

@Component({
  selector: 'user-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isStillRecoginze = false;
  service='';
  constructor(
    private formBuilder: FormBuilder,
    public toast: ToastService,
    private authService: AuthService,
    private router: Router,
    public voiceRecognition: VoiceRecognitionService
  ) {
    this.voiceRecognition.init();
  }

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

  startService() {
    this.isStillRecoginze = this.voiceRecognition.start() === true ? true : false;
  }

  stopService() {
    this.isStillRecoginze = this.voiceRecognition.stop() === false ? false : true;
  }

}
