import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(public authService: Auth, private router: Router) {}
 login() {
    this.authService.login();
    alert('You are now logged in!');
  }

  logout() {
    this.authService.logout();
    alert('You are now logged out!');
  }

  goToAdmin() {
    this.router.navigate(['/admin']);
  }
}
