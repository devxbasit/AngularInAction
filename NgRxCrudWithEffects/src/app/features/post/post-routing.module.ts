import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDashboardComponent } from './components/post-dashboard/post-dashboard.component';
import { PostUpsertComponent } from './components/post-upsert/post-upsert.component';

const routes: Routes = [
  {
    path: 'post',
    component: PostDashboardComponent,
    children: [{ path: 'upsert', component: PostUpsertComponent }],
  },
];
@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class PostRoutingModule {}
