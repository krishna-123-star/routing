import { AsyncPipe, CommonModule, CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FilterByLengthPipe } from './filter-by-length-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports:[CommonModule, FilterByLengthPipe]
})
export class App {
title = 'Pipe Test';
  values: string[] = ['apple', 'banana', 'carrot', 'date'];
}
