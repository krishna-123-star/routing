import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { NotFound } from './not-found/not-found';
import { Team } from './team/team';

export const routes: Routes = [
  { path: 'home', component: Home },
{ 
    path: 'about', 
    component: About,
    children: [
      { path: 'team', component: Team } 
    ]
  },  { path: '**', component: NotFound }
];
