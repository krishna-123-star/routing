import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [PercentPipe] 
})
export class App {
  myNumber: number = 0.23;

}
