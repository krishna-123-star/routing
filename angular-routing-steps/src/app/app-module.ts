import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { Home } from './home/home';
import { About } from './about/about';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FilterByLengthPipe } from './filter-by-length-pipe';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  // bootstrap: [App]
})
export class AppModule { }
