import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() sidenav: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}

  toggle() {
    this.sidenav.emit();
  }

  logout() {
    sessionStorage.removeItem('amazon_admin');
    this.router.navigateByUrl('/admin/login');
  }
}
