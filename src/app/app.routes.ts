import { Routes } from '@angular/router';
import { tabsRoutes } from './pages/tabs/tabs.routes';

export const routes: Routes = [
  ...tabsRoutes,
  {
    path: 'wizard-details/:id',
    loadComponent: () => import('./pages/wizard-details/wizard-details.page').then( m => m.WizardDetailsPage)
  },
];
