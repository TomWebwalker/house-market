import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component')
  },
  {
    path: 'houses',
    loadComponent: () => import('./houses/houses.component')
  }
];
