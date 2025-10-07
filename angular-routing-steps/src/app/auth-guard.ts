import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = false;
  const router = inject(Router);

  if (!isLoggedIn) {
    alert('Access denied! Please log in first.');
    router.navigate(['/']);
    return false;
  }
  return true;
};
