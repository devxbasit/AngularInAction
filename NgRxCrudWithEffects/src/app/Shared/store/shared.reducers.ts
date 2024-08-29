import { createReducer, on } from '@ngrx/store';
import { sharedInitialState } from './shared.state';
import {
  setLoadingSpinnerAction,
  setNotificationAction
} from './shared.actions';

const _sharedReducer = createReducer(
  sharedInitialState,
  on(setLoadingSpinnerAction, (state, action) => {
    return { ...state, showLoadingSpinner: action.value };
  }),
  on(setNotificationAction, (state, action) => {
    return { ...state, notification: action.notification };
  })
);

export function sharedReducer(initialState: any, action: any) {
  return _sharedReducer(initialState, action);
}
