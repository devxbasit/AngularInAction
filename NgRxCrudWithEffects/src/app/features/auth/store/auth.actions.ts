import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/core/interfaces/core.interface.ts';

export const signInStartAction = createAction(
  '[Auth] Sign In Start',
  props<{ email: string; password: string }>()
);

export const signInSuccessAction = createAction(
  '[Auth] Sign In Success',
  props<{ user: IUser; redirect: boolean }>()
);

export const signupStartAction = createAction(
  '[Auth] Signup Start',
  props<{ email: string; password: string }>()
);

export const signupSuccessAction = createAction(
  '[Auth] Signup Success',
  props<{ user: IUser; redirect: boolean }>()
);

export const autoSignInAction = createAction('[Auth] Auto Sign In Action');
export const autoSignOutAction = createAction('[Auth] Auto Sign Out Action');
