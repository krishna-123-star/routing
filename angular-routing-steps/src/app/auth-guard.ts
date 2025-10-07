import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';

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

export const childGuard: CanActivateChildFn = (route, state) => {
  const isLoggedIn = true;
  const router = inject(Router);

  if (!isLoggedIn) {
    alert('You are not allowed to view this section!');
    router.navigate(['/']);
    return false;
  }

  return true;
};
