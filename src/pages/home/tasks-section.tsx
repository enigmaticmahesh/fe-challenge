import timeframes from '../../timeframes';
import menu from '../../assets/menu.svg';
import { Task } from '../../types';
import useDataContext from '../../hooks/useDataContext';

const TIMEFRAME_DESC: { [T: string]: string } = {
  daily: 'Yesterday',
  weekly: 'Last Week',
  monthly: 'Last Month',
};

type TaskItemProps = {
  task: Task;
};

const TaskItem = ({ task }: TaskItemProps) => {
  const { timeFrame } = useDataContext();
  const currentCompleted = task.timeframes[timeFrame].current;
  const previousCompleted = task.timeframes[timeFrame].previous;
  return (
    <div className="task__container">
      <div className="task__data">
        <div className="task__header">
          <h5>{task.title}</h5>
          <img src={menu} alt="menu" />
        </div>
        <div className="task__wrapper">
          <div className="task__body">
            <span className="task__completed">{currentCompleted}</span>
            Completed
          </div>
          <div className="task__desc">
            {TIMEFRAME_DESC[timeFrame]}: {previousCompleted}&nbsp;
            <span className="only-desktop">Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TasksSection = () => {
  const tasks = Object.values(timeframes).map((task, i) => (
    <TaskItem key={i} task={task} />
  ));
  return <section className="tasks__section">{tasks}</section>;
};

export default TasksSection;
