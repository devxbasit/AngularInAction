export const COUNTER_FEATURE_NAME = 'counter';

export interface ICounterState {
  currentCounter: number;
  status: string;
}

export const counterInitialState: ICounterState = {
  currentCounter: 0,
  status: 'Active',
};
