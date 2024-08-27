import { createReducer, on } from '@ngrx/store';
import { postInitialState } from './post.state';
import {
  addPostAction,
  deletePostAction,
  updatePostAction,
} from './post.actions';
import { IPost } from 'src/app/core/interfaces/core.interface.ts';

const _postReducer = createReducer(
  postInitialState,
  on(addPostAction, (state, action) => {
    console.log('Add post reducer in action');

    const newPost: IPost = { ...action.post, postId: new Date().getTime() };

    return {
      ...state,
      posts: [...state.posts, newPost],
    };
  }),
  on(updatePostAction, (state, action) => {
    console.log('Update post reducer in action');

    const updatedPosts = state.posts.map((x) =>
      x.postId === action.post.postId ? action.post : x
    );

    return {
      ...state,
      posts: updatedPosts,
    };
  }),
  on(deletePostAction, (state, action) => {
    console.log('Delete post reducer in action');

    return {
      ...state,
      posts: state.posts.filter((x) => x.postId !== action.postId),
    };
  })
);

export function postReducer(initialState: any, action: any) {
  return _postReducer(initialState, action);
}
