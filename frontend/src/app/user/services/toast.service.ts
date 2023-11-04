import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TOAST_ICONS, TOAST_STATE } from '../shared/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  public showsToast$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public toastMessage$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Default Toast Message'
  );
  public toastState$: BehaviorSubject<string> = new BehaviorSubject<string>(
    TOAST_STATE.success
  );
  public toastIcon$: BehaviorSubject<string> = new BehaviorSubject<string>(
    TOAST_ICONS.success
  );

  constructor() {}

  showToast(toastState: string, toastMsg: string, icon:string): void {
    // Observables use '.next()' to indicate what they want done with observable
    // This will update the toastState to the toastState passed into the function
    this.toastState$.next(toastState);

    // This updates the toastMessage to the toastMsg passed into the function
    this.toastMessage$.next(toastMsg);

    this.toastIcon$.next(icon);

    // This will update the showsToast trigger to 'true'
    this.showsToast$.next(true);
    
  }

  // This updates the showsToast behavioursubject to 'false'
  dismissToast(): void {
    this.showsToast$.next(false);
  }
}
