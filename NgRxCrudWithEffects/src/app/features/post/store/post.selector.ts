import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPostState, POST_FEATURE_NAME } from './post.state';

const postFeatureSelector =
  createFeatureSelector<IPostState>(POST_FEATURE_NAME);

export const postsListSelector = createSelector(
  postFeatureSelector,
  (state) => {
    return state.posts;
  }
);

// factory selector
export const postSelector = (postId: number) =>
  createSelector(postFeatureSelector, (state) => {
    return state.posts.find((x) => x.postId === postId);
  });
