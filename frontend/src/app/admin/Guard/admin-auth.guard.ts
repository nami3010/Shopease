import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const admin_creds = JSON.parse(
    JSON.stringify(localStorage.getItem('amazon_admin'))
  );
  if (admin_creds) {
    return true;
  } else {
    router.navigateByUrl('/admin/login');
    return false;
  }
};
