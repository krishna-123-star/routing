import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
    constructor(private router: Router) {}
  goToFragment() {
    this.router.navigate(['/about'], { fragment: 'mission' });
  }
   goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
