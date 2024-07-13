import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { PostsRoutingModule } from './posts-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddPostComponent,
    EditPostComponent,
    PostListComponent,
    ViewPostComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [PostsRoutingModule],
})
export class PostsModule {}
