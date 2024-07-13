export interface ICounterState {
  counter: number;
  channelName: string;
}

export const counterInitialState: ICounterState = {
  counter: 5,
  channelName: '#1 Main Channel',
};
