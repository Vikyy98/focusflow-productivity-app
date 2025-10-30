import { FaPlus } from "react-icons/fa";
import TaskList from "../components/tasks/TaskList";
import AddTask from "../components/tasks/AddTask";
import TaskStatus from "../components/tasks/TaskStatus";
import useTaskContext from "../contexts/tasks/useTaskContext";

const Tasks = () => {
  const { state, dispatch } = useTaskContext();

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300 rounded-lg shadow-sm">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Tasks
        </h2>
        <button
          onClick={() => dispatch({ type: "SET_MODE", payload: "add" })}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm transition"
        >
          <FaPlus size={14} /> Add Task
        </button>
      </div>

      {/* Filter and Summary */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
        <select className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-md px-3 py-2 outline-none border border-gray-300 dark:border-gray-600 transition">
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
        <TaskStatus />
      </div>

      {/* Add Task Input */}
      {(state.mode === "add" || state.mode === "edit") && <AddTask />}

      {/* Task List */}
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md transition-colors duration-300">
        {state.tasks.length > 0 ? (
          <TaskList />
        ) : (
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center py-8">
            No tasks yet. Add one to get started!
          </p>
        )}
      </div>
    </div>
  );
};

export default Tasks;
