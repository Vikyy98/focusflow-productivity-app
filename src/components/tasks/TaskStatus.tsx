import useTaskContext from "../../contexts/tasks/useTaskContext";

const TaskStatus = () => {
  const { state } = useTaskContext();
  const completedTaskCount = state.tasks.filter(
    (r) => r.status === "completed"
  )?.length;
  return (
    <p className="text-sm text-gray-700">
      Completed:{" "}
      <span className="text-gray-700 font-semibold">
        {completedTaskCount} / {state.tasks.length}
      </span>
    </p>
  );
};

export default TaskStatus;
