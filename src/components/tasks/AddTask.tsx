import { useState } from "react";
import useAppContext from "../../contexts/useContext";
import type { Task } from "../../contexts/AppProvider";

const AddTask = () => {
  const [task, setTask] = useState("");
  const { state, dispatch } = useAppContext();
  const handleAddTask = () => {
    const newTask: Task = {
      id: state.tasks.length + 1,
      title: task,
      status: "pending",
    };
    dispatch({ type: "ADD_TASK", payload: newTask });
    setTask("");
  };

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
        onClick={handleAddTask}
        className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-md text-sm font-medium"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
