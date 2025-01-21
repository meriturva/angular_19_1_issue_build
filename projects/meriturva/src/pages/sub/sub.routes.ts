import { Routes } from '@angular/router';

import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';


export const SUB_ROUTES: Routes = [
  { path: '', component: BComponent },
  { path: 'edit', component: AComponent }
];
