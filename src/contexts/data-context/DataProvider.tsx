import { useState } from 'react';
import { TimeFrameType } from '../../types';
import DataContext from './DataContext';

type DataProviderProps = {
  children: React.ReactNode;
};

const DataProvider = ({ children }: DataProviderProps) => {
  const [timeFrame, setTimeFrame] = useState<TimeFrameType>('daily');

  return (
    <DataContext.Provider value={{ timeFrame, setTimeFrame }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
