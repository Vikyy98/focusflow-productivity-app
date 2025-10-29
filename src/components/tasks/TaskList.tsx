import useTaskContext from "../../contexts/tasks/useTaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { state } = useTaskContext();

  return (
    <div className="bg-gray-800 rounded-xl p-4 space-y-3 shadow-lg">
      {state.tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TaskList;
