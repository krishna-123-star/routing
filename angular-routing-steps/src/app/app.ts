import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [TitleCasePipe] 
})
export class App {
  myString: string = 'this is a sentence in lowercase.';

}
