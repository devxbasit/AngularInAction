import { createReducer, on } from '@ngrx/store';
import {
  changeChannelNameAction,
  customIncrementAction,
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
  }),
  on(customIncrementAction, (state, action) => {
    return {
      ...state,
      currentCounter: state.currentCounter + action.customIncrementValue,
    };
  }),
  on(changeChannelNameAction, (state, action) => {
    return {
      ...state,
      channelName: action.newChannelName,
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
