import { createReducer, on } from '@ngrx/store';
import { authInitialState } from './auth.state';
import {
  autoLogoutAction,
  signInSuccessAction,
  signupSuccessAction,
} from './auth.actions';

const _authReducer = createReducer(
  authInitialState,
  on(signInSuccessAction, (state, action) => {
    return { ...state, user: action.user };
  }),
  on(signupSuccessAction, (state, action) => {
    return { ...state, user: action.user };
  }),
  on(autoLogoutAction, (state, action) => {
    return { ...state, user: null };
  })
);

export function authReducer(initialState: any, action: any) {
  return _authReducer(initialState, action);
}
