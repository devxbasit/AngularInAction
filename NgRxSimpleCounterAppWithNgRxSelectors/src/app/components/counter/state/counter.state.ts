export interface ICounterInitialState {
  currentCounter: number;
  channelName: string;
}

export const counterInitialState: ICounterInitialState = {
  currentCounter: 0,
  channelName: 'Default Channel',
};
