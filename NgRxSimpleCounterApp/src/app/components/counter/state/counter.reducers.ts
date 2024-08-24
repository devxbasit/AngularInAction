import { createReducer, on } from '@ngrx/store';
import {
  decrementAction,
  incrementAction,
  resetAction,
} from './counter.actions';
import { counterInitialState } from './counter.state';

const _counterReducer = createReducer(
  counterInitialState,
  on(incrementAction, (state) => {
    return {
      ...state,
      currentCounter: state.currentCounter + 1,
    };
  }),
  on(decrementAction, (state) => {
    return {
      ...state,
      currentCounter: state.currentCounter - 1,
    };
  }),
  on(resetAction, (state) => {
    return {
      ...state,
      currentCounter: 0,
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
