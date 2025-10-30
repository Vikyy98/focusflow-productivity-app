import useTaskContext from "../../contexts/tasks/useTaskContext";

const TaskStatus = () => {
  const { state } = useTaskContext();

  const { completedCount, totalCount } = state.taskCompletionDetails;
  const percentage =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-between
                 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                 rounded-xl px-4 py-3 shadow-sm transition-colors duration-300"
    >
      <p className="text-sm text-slate-700 dark:text-slate-200">
        Completed:{" "}
        <span className="font-semibold text-slate-800 dark:text-slate-100">
          {completedCount} / {totalCount}
        </span>{" "}
        ({percentage}%)
      </p>

      {/* Progress Bar */}
      <div className="w-full sm:w-48 h-2 bg-slate-200 dark:bg-slate-700 rounded-full mt-3 sm:mt-0 overflow-hidden">
        <div
          className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TaskStatus;
