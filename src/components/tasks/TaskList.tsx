import useAppContext from "../../contexts/useContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { state } = useAppContext();

  return (
    <div className="bg-gray-800 rounded-xl p-4 space-y-3 shadow-lg">
      {state.tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TaskList;
