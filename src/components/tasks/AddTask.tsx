import useTaskContext from "../../contexts/tasks/useTaskContext";
import type { Task } from "../../contexts/tasks/TaskProvider";
import { useEffect, useState } from "react";

const AddTask = () => {
  const [task, setTask] = useState("");
  const { state, dispatch } = useTaskContext();
  const handleAddOrEditTask = () => {
    if (state.mode === "edit" && state.editTask) {
      const updatedTask: Task = {
        id: state.editTask.id,
        title: task,
        status: state.editTask.status,
      };
      dispatch({ type: "EDIT_TASK", payload: updatedTask });
    } else if (state.mode === "add" && task.trim() !== "") {
      const newTask: Task = {
        id: Date.now(),
        title: task,
        status: "pending",
      };
      dispatch({ type: "ADD_TASK", payload: newTask });
    }
    setTask("");
  };

  useEffect(() => {
    if (state.mode === "edit") {
      setTask(state.editTask?.title || "");
    }
  }, [state.mode, state.editTask?.title]);

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Enter a new task..."
        className="flex-1 bg-gray-800 text-gray-200 placeholder-gray-500 border border-gray-700 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={handleAddOrEditTask}
        className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-md text-sm font-medium"
      >
        {state.mode === "edit" ? "Edit Task" : "Add Task"}
      </button>
    </div>
  );
};

export default AddTask;
