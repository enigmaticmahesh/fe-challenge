export type TimeFrame = {
  current: number;
  previous: number;
};
export type Task = {
  title: string;
  timeframes: {
    [T: string]: TimeFrame;
  };
};
export type TimeFrameType = 'daily' | 'weekly' | 'monthly' | string;
