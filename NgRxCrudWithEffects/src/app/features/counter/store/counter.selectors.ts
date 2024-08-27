import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COUNTER_FEATURE_NAME, ICounterState } from './counter.state';

const counterFeatureSelector =
  createFeatureSelector<ICounterState>(COUNTER_FEATURE_NAME);

export const counterCurrentCounterSelector = createSelector(
  counterFeatureSelector,
  (state) => {
    return state.currentCounter;
  }
);

export const counterStatusSelector = createSelector(
  counterFeatureSelector,
  (state) => {
    return state.status;
  }
);
