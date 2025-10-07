import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { NotFound } from './not-found/not-found';
import { Team } from './team/team';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];