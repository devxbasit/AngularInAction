import { createAction, props } from '@ngrx/store';

export const setLoadingSpinnerAction = createAction(
  '[Shared State] Set Loading Spinner',
  props<{ value: boolean }>()
);
export const setNotificationAction = createAction(
  '[Shared State] Set Notification Action',
  props<{ notification: { message: string; type: 'success' | 'error' } }>()
);
