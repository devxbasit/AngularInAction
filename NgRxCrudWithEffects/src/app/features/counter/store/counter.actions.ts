import { createAction, props } from '@ngrx/store';

export const incrementCounterAction = createAction('[Counter] Increment');
export const decrementCounterAction = createAction('[Counter] Decrement');
export const resetCounterAction = createAction('[Counter] Reset');
export const customIncrementCounterAction = createAction(
  '[Counter] Custom Increment',
  props<{ incrementByValue: number }>()
);

export const updateCounterStatus = createAction(
  '[Counter] Update Status',
  props<{ status: string }>()
);
