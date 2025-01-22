import { Routes } from '@angular/router';
import { AppComponent } from './app.component';


export const APP_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () => import('../pages/sub/sub.routes').then(r => r.SUB_ROUTES),
      }
    ]
  }
];
