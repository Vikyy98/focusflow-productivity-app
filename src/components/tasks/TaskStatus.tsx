import useTaskContext from "../../contexts/tasks/useTaskContext";

const TaskStatus = () => {
  const { state } = useTaskContext();
  return (
    <p className="text-sm text-gray-700">
      Completed:{" "}
      <span className="text-gray-700 font-semibold">
        {state.taskCompletionDetails.completedCount} /{" "}
        {state.taskCompletionDetails.totalCount}
      </span>
    </p>
  );
};

export default TaskStatus;
