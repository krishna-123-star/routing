import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
  standalone: true,
  imports: [RouterModule]
})
export class About implements OnInit {
fragment: string | null = null;
constructor(private route: ActivatedRoute) {}

ngOnInit() {
    this.route.fragment.subscribe(f => {
      this.fragment = f;
      if (f) {
        const element = document.getElementById(f);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

}
