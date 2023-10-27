import { BreakpointObserver } from '@angular/cdk/layout';
import {
  AfterViewInit,
  Component,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements AfterViewInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  
  constructor(
    private observer: BreakpointObserver,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width:800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
      // Run change detection explicitly
      this.cdr.detectChanges();
    });
  }
}
