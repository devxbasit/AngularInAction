import { Routes } from '@angular/router';
import { PostListComponent } from './component/post-list/post-list.component';
import { NotFound404Component } from './component/not-found-404/not-found-404.component';
import { UserListComponent } from './component/user-list/user-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'user', component: UserListComponent },
  { path: 'post', component: PostListComponent },
  { path: '**', component: NotFound404Component },
];
