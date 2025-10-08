import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [LowerCasePipe] 
})
export class App {
  myString: string = 'This is a STRING in Mixed CASE';

}
