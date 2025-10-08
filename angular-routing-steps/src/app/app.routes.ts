import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { NotFound } from './not-found/not-found';
import { Team } from './team/team';
import { Dashboard } from './dashboard/dashboard';
import { DashboardProfile } from './dashboard-profile/dashboard-profile';
import { DashboardSettings } from './dashboard-settings/dashboard-settings';
import { AuthGuard } from './auth-guard';
import { Admin } from './admin/admin';
import { Settings } from './settings/settings';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  {
    path: 'admin',
    component: Admin,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'settings', component: Settings },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'home' }
];