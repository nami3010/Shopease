import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  events: string[] = [];
  opened!: boolean;
  isExpanded: boolean = false;

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
