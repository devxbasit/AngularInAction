import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_NAME, IAuthState } from './auth.state';

const authFeatureSelector =
  createFeatureSelector<IAuthState>(AUTH_FEATURE_NAME);

export const isAuthenticatedSelector = createSelector(
  authFeatureSelector,
  (state) => (state ? true : false)
);

export const authTokenSelector = createSelector(authFeatureSelector, (state) =>
  state.user ? state.user.token : null
);
