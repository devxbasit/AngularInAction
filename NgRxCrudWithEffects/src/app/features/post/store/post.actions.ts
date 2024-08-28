import { IPost } from './../../../core/interfaces/core.interface.ts';
import { createAction, props } from '@ngrx/store';

export const loadPostsAction = createAction('[Post] Load Posts');
export const loadPostsSuccessAction = createAction(
  '[Post] Load Post Success',
  props<{ posts: IPost[] }>()
);

export const addPostAction = createAction(
  '[Post] Add Post',
  props<{ post: IPost }>()
);
export const addPostSuccessAction = createAction(
  '[Post] Add Post Success',
  props<{ post: IPost }>()
);

export const updatePostAction = createAction(
  '[Post] Update Post',
  props<{ post: IPost }>()
);

export const updatePostSuccessAction = createAction(
  '[Post] Update Post Success',
  props<{ post: IPost }>()
);
export const deletePostAction = createAction(
  '[Post] Delete Post',
  props<{ postId: string }>()
);
export const deletePostSuccessAction = createAction(
  '[Post] Delete Post Success',
  props<{ postId: string }>()
);
