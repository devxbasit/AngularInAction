import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDashboardComponent } from './components/post-dashboard/post-dashboard.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostUpsertComponent } from './components/post-upsert/post-upsert.component';
import { PostRoutingModule } from './post-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostDashboardComponent,
    PostListComponent,
    PostUpsertComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [PostRoutingModule],
})
export class PostModule {}
