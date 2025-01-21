import { Routes } from '@angular/router';


export const APP_ROUTES: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('../pages/sub/sub.routes').then(r => r.SUB_ROUTES),
  }
];
