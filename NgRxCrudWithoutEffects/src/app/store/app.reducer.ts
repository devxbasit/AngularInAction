import { counterReducer } from '../features/counter/store/counter.reducer';
import {
  COUNTER_FEATURE_NAME,
  ICounterState,
} from '../features/counter/store/counter.state';
import { postReducer } from '../features/post/store/post.reducer';
import {
  IPostState,
  POST_FEATURE_NAME,
} from '../features/post/store/post.state';

export interface IAppState {
  [COUNTER_FEATURE_NAME]: ICounterState;
  [POST_FEATURE_NAME]: IPostState;
}

export const appReducer = {
  [COUNTER_FEATURE_NAME]: counterReducer,
  [POST_FEATURE_NAME]: postReducer,
};
