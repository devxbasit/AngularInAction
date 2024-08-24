import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICounterInitialState } from './counter.state';

const counterFeatureSelector =
  createFeatureSelector<ICounterInitialState>('counter');

export const counterCurrentCounterSelector = createSelector(
  counterFeatureSelector,
  (state) => {
    return state.currentCounter;
  }
);

export const counterChannelNameSelector = createSelector(
  counterFeatureSelector,
  (state) => {
    return state.channelName;
  }
);
