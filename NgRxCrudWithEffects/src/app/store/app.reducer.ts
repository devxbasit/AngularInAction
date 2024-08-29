import { authReducer } from '../features/auth/store/auth.reducer';
import {
  AUTH_FEATURE_NAME,
  IAuthState,
} from '../features/auth/store/auth.state';
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
import { sharedReducer } from '../Shared/store/shared.reducers';
import {
  ISharedState,
  SHARED_FEATURE_NAME,
} from '../Shared/store/shared.state';

export interface IAppState {
  [COUNTER_FEATURE_NAME]: ICounterState;
  [POST_FEATURE_NAME]: IPostState;
  [AUTH_FEATURE_NAME]: IAuthState;
  [SHARED_FEATURE_NAME]: ISharedState;
}

export const appReducer = {
  [COUNTER_FEATURE_NAME]: counterReducer,
  [POST_FEATURE_NAME]: postReducer,
  [AUTH_FEATURE_NAME]: authReducer,
  [SHARED_FEATURE_NAME]: sharedReducer,
};
