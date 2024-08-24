import { createAction } from '@ngrx/store';

export const incrementAction = createAction('increment');
export const decrementAction = createAction('decrement');
export const resetAction = createAction('reset');
