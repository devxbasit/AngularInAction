import { createAction, props } from '@ngrx/store';
import { IPost } from 'src/app/core/interfaces/core.interface.ts';

export const addPostAction = createAction(
  '[Post] Add Post',
  props<{ post: IPost }>()
);
export const updatePostAction = createAction(
  '[Post] Update Post',
  props<{ post: IPost }>()
);
export const deletePostAction = createAction(
  '[Post] Delete Post',
  props<{ postId: number }>()
);
