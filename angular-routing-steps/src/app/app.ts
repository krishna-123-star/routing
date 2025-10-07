import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [RouterModule] 
})
export class App {
  constructor(private router: Router, private route: ActivatedRoute) {}

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
