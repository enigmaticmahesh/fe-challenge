import TasksSection from './tasks-section';
import UserSection from './user-section';

const HomePage = () => {
  return (
    <div className="home__page">
      <div className="container">
        <UserSection />
        <TasksSection />
      </div>
    </div>
  );
};

export default HomePage;
