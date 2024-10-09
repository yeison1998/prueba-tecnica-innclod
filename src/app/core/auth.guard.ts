import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const isAuth = localStorage.getItem("validateSession");
  if (isAuth == 'true') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
