import { Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { NotFound404Component } from './components/not-found-404/not-found-404.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: 'home' },
  { path: 'book/:bookId', component: BookComponent },
  {
    path: 'search/:id',
    component: SearchComponent,
    data: { title: 'Search' },
    resolve: {
      searchData: function () {
        return [1, 2, 3];
      },
    },
  },
  { path: '**', component: NotFound404Component },
];
