import { useContext } from 'react';
import DataContext from '../contexts/data-context/DataContext';

const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within DataProvider');
  }
  return context;
};

export default useDataContext;
