import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router, 
    private route: ActivatedRoute) {}

  goToAbout() {
    this.router.navigate(['/about']);
  }

  goToTeam() {
    this.router.navigate(['team'], { relativeTo: this.route });
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
