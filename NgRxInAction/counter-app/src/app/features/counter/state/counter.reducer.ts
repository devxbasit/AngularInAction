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

  on(incrementAction, (oldState) => {
    return {
      ...oldState,
      counter: oldState.counter + 1,
    };
  }),
  on(decrementAction, (oldState) => {
    return {
      ...oldState,
      counter: oldState.counter - 1,
    };
  }),
  on(resetAction, (oldState) => {
    return {
      ...oldState,
      counter: 0,
    };
  }),
  on(customIncrementAction, (oldState, actionData) => {
    return {
      ...oldState,
      counter: oldState.counter + actionData.num,
    };
  }),
  on(changeChannelNameAction, (oldState) => {
    return {
      ...oldState,
      channelName: '# modified channel name',
    };
  })
);

export function getCounterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
