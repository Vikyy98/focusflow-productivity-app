import useTaskContext from "../../contexts/tasks/useTaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { state } = useTaskContext();

  if (state.tasks.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center py-12 text-center
                   bg-white dark:bg-slate-900 rounded-xl shadow-sm border
                   border-slate-200 dark:border-slate-800 transition-colors duration-300"
      >
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200">
          No tasks yet ✅
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm max-w-sm">
          Add your first task using the input above to start managing your
          to-dos.
        </p>
      </div>
    );
  }

  return (
    <div
      className="space-y-3 p-4 rounded-xl shadow-sm border
                 bg-white border-slate-200
                 dark:bg-slate-800 dark:border-slate-700
                 transition-colors duration-300"
    >
      {state.tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TaskList;
