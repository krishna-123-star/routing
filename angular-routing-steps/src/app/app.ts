import { CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [JsonPipe] 
})
export class App {
myObject: any = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
  };
}
