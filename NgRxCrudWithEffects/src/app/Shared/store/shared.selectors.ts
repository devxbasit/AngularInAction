import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISharedState, SHARED_FEATURE_NAME } from './shared.state';

const sharedFeatureSelector =
  createFeatureSelector<ISharedState>(SHARED_FEATURE_NAME);

export const showLoadingSpinnerSelector = createSelector(
  sharedFeatureSelector,
  (state) => state.showLoadingSpinner
);
export const notificationSelector = createSelector(
  sharedFeatureSelector,
  (state) => state.notification
);
