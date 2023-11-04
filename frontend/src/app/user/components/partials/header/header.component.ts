import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  loggedIn: boolean = false;

  constructor(public authenticationService: AuthService) {
    const loggeInData = JSON.parse(
      JSON.stringify(localStorage.getItem('amazon_user'))
    );
    const data = JSON.parse(loggeInData);
    if (data) {
      if (data.token) {
        this.loggedIn = true;
      }
    }
  }

  logout() {
    this.loggedIn = false;
    this.authenticationService.loggedInSubject.next(false);
    localStorage.removeItem('amazon_user');
  }
}
