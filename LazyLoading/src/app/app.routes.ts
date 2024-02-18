import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFound404Component } from './components/not-found-404/not-found-404.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () =>
      import('./Routes/product.routes').then((r) => r.PRODUCT_ROUTES),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (c) => c.AboutComponent
      ),
  },
  { path: '**', component: NotFound404Component },
];
