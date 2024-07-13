import { createAction, props } from '@ngrx/store';

export const incrementAction = createAction('increment');
export const decrementAction = createAction('decrement');
export const resetAction = createAction('reset');

export const customIncrementAction = createAction(
  'customIncrement',
  props<{ num: number }>()
);

export const changeChannelNameAction = createAction('changeChannelName');
