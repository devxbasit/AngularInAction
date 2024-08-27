import { createReducer, on } from '@ngrx/store';
import {
  customIncrementCounterAction,
  decrementCounterAction,
  incrementCounterAction,
  resetCounterAction,
  updateCounterStatus,
} from './counter.actions';
import { counterInitialState, ICounterState } from './counter.state';

const _counterReducer = createReducer(
  counterInitialState,
  on(incrementCounterAction, (state: ICounterState) => {
    return {
      ...state,
      currentCounter: state.currentCounter + 1,
    };
  }),
  on(decrementCounterAction, (state: ICounterState) => {
    return {
      ...state,
      currentCounter: state.currentCounter - 1,
    };
  }),
  on(resetCounterAction, (state: ICounterState) => {
    return {
      ...state,
      currentCounter: 0,
    };
  }),
  on(customIncrementCounterAction, (state: ICounterState, action) => {
    return {
      ...state,
      currentCounter: state.currentCounter + action.incrementByValue,
    };
  }),
  on(updateCounterStatus, (state: ICounterState, action) => {
    return {
      ...state,
      status: state.currentCounter + action.status,
    };
  })
);

export function counterReducer(initialState: any, action: any) {
  return _counterReducer(initialState, action);
}
