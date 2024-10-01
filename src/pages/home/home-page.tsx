const UserSection = () => {
  return <div>User Section</div>;
};

const TasksSection = () => {
  return <div>Tasks Section</div>;
};

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
