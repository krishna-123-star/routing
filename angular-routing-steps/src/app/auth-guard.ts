import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  isLoggedIn = true; 

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.isLoggedIn) {
      return true;
    } else {
      alert('Access denied! Please log in.');
      this.router.navigate(['/home']);
      return false;
    }
  }
}
