import { createReducer, on } from '@ngrx/store';
import { postInitialState } from './post.state';
import {
  loadPostsSuccessAction,
  addPostSuccessAction,
  updatePostSuccessAction,
  deletePostSuccessAction
} from './post.actions';

const _postReducer = createReducer(
  postInitialState,

  on(loadPostsSuccessAction, (state, action) => {
    console.log('Load posts success reducer in action');
    return {
      ...state,
      posts: [...action.posts],
    };
  }),

  on(addPostSuccessAction, (state, action) => {
    console.log('Add post success reducer in action');

    return {
      ...state,
      posts: [...state.posts, action.post],
    };
  }),
  on(updatePostSuccessAction, (state, action) => {
    console.log('Update post success reducer in action');

    const updatedPosts = state.posts.map((x) =>
      x.postId === action.post.postId ? action.post : x
    );

    return {
      ...state,
      posts: updatedPosts,
    };
  }),
  on(deletePostSuccessAction, (state, action) => {
    console.log('Delete post success reducer in action');

    return {
      ...state,
      posts: state.posts.filter((x) => x.postId !== action.postId),
    };
  })
);

export function postReducer(initialState: any, action: any) {
  return _postReducer(initialState, action);
}
