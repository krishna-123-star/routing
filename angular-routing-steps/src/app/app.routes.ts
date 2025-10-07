import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { NotFound } from './not-found/not-found';
import { Team } from './team/team';
import { Dashboard } from './dashboard/dashboard';
import { authGuard, childGuard } from './auth-guard';
import { DashboardProfile } from './dashboard-profile/dashboard-profile';
import { DashboardSettings } from './dashboard-settings/dashboard-settings';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
{
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard],
    canActivateChild: [childGuard],
    children: [
      { path: 'profile', component: DashboardProfile },
      { path: 'settings', component: DashboardSettings }
    ]
  },  { path: '**', redirectTo: '' }
];