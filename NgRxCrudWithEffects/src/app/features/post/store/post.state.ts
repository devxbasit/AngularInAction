import { IPost } from 'src/app/core/interfaces/core.interface.ts';

export const POST_FEATURE_NAME = 'post';

export interface IPostState {
  posts: IPost[];
}

export const postInitialState: IPostState = {
  posts: [
    { postId: 1, title: 'Post 1 title' },
    { postId: 2, title: 'Post 2 title' },
  ],
};