import { createContext } from 'react';
import { TimeFrameType } from '../../types';

type DataContextType = {
  timeFrame: TimeFrameType;
  setTimeFrame: React.Dispatch<React.SetStateAction<TimeFrameType>>;
};

const DataContext = createContext<DataContextType | null>(null);
export default DataContext;
