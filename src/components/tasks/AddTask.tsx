import { useEffect, useState } from "react";
import useTaskContext from "../../contexts/tasks/useTaskContext";
import type { Task } from "../../contexts/tasks/TaskProvider";

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
        title: task.trim(),
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
    <div
      className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 
                 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border
                 border-slate-200 dark:border-slate-700 transition-colors duration-300"
    >
      <input
        type="text"
        placeholder="Enter a new task..."
        className="flex-1 rounded-md px-3 py-2 text-sm outline-none border
                   bg-slate-100 text-slate-900 placeholder-slate-500
                   dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400 dark:border-slate-600
                   focus:ring-2 focus:ring-blue-500 transition"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        onClick={handleAddOrEditTask}
        disabled={!task.trim()}
        className="px-4 py-2 rounded-md text-sm font-medium
                   bg-blue-600 hover:bg-blue-700 text-white 
                   dark:bg-blue-500 dark:hover:bg-blue-600
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all self-end sm:self-auto"
      >
        {state.mode === "edit" ? "Update Task" : "Add Task"}
      </button>
    </div>
  );
};

export default AddTask;
