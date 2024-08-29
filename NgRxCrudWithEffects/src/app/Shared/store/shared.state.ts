export interface ISharedState {
  showLoadingSpinner: boolean;
  notification: { message: string; type: 'success' | 'error' };
}

export const SHARED_FEATURE_NAME = 'shared';

export const sharedInitialState: ISharedState = {
  showLoadingSpinner: false,
  notification: { message: '', type: 'success' },
};
