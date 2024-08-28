import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.reducer';
import { IPost } from 'src/app/core/interfaces/core.interface.ts';
import { postsListSelector } from '../../store/post.selector';
import { deletePostAction, loadPostsAction } from '../../store/post.actions';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  store = inject(Store<IAppState>);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  posts: IPost[] = [];

  ngOnInit(): void {
    this.store.dispatch(loadPostsAction());
    this.store.select(postsListSelector).subscribe((posts) => {
      this.posts = posts;
    });
  }

  addPost() {
    this.router.navigate(['upsert'], {
      relativeTo: this.activatedRoute,
    });
  }

  editPost(postId?: string) {
    if (postId) {
      this.router.navigate(['upsert'], {
        relativeTo: this.activatedRoute,
        queryParams: { postId },
      });
    }
  }

  deletePost(postId?: string) {
    if (postId) {
      this.store.dispatch(deletePostAction({ postId }));
    }
  }
}
