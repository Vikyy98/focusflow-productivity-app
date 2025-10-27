import useAppContext from "../../contexts/useContext";

const TaskStatus = () => {
  const { state } = useAppContext();
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
