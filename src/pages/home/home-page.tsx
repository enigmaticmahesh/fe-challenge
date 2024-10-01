import DataProvider from '../../contexts/data-context/DataProvider';
import TasksSection from './tasks-section';
import UserSection from './user-section';

const HomePage = () => {
  return (
    <div className="home__page">
      <div className="container">
        <DataProvider>
          <UserSection />
          <TasksSection />
        </DataProvider>
      </div>
    </div>
  );
};

export default HomePage;
