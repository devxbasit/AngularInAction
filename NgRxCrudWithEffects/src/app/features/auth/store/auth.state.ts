import { IUser } from 'src/app/core/interfaces/core.interface.ts';

export const AUTH_FEATURE_NAME = 'auth';

export interface IAuthState {
  user: IUser | null;
}

export const authInitialState: IAuthState = {
  user: null,
};
