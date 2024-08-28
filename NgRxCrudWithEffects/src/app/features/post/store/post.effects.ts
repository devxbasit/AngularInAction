import { PostService } from './../../../core/services/post.service';
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import {
  addPostAction,
  addPostSuccessAction,
  deletePostAction,
  deletePostSuccessAction,
  loadPostsAction,
  loadPostsSuccessAction,
  updatePostAction,
  updatePostSuccessAction
} from './post.actions';
import { IPost } from 'src/app/core/interfaces/core.interface.ts';

@Injectable({ providedIn: 'root' })
export class PostEffects {
  actions = inject(Actions);
  postService = inject(PostService);

  loadPostEffect$ = createEffect(() => {
    return this.actions.pipe(
      ofType(loadPostsAction),
      mergeMap((action) => {
        return this.postService.getPostList().pipe(
          map((posts: IPost[]) => {
            console.log(posts);
            return loadPostsSuccessAction({ posts });
          })
        );
      })
    );
  });

  addPostEffect$ = createEffect(() => {
    return this.actions.pipe(
      ofType(addPostAction),
      mergeMap((action) => {
        return this.postService.addPost(action.post).pipe(
          map((response) => {
            return addPostSuccessAction({
              post: { ...action.post, postId: response.name },
            });
          })
        );
      })
    );
  });

  updatePostEffect$ = createEffect(() => {
    return this.actions.pipe(
      ofType(updatePostAction),
      mergeMap((action) => {
        return this.postService.updatePost(action.post).pipe(
          map((response) => {
            return updatePostSuccessAction({
              post: { ...action.post },
            });
          })
        );
      })
    );
  });

  deletePostEffect$ = createEffect(() => {
    return this.actions.pipe(
      ofType(deletePostAction),
      mergeMap((action) => {
        return this.postService.deletePost(action.postId).pipe(
          map((response) => {
            return deletePostSuccessAction({postId: action.postId});
          })
        );
      })
    );
  });
}
