import { FaPlus } from "react-icons/fa";
import TaskList from "../components/tasks/TaskList";
import AddTask from "../components/tasks/AddTask";
import TaskStatus from "../components/tasks/TaskStatus";
import { useState } from "react";

const Tasks = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className="p-6 text-gray-100">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl text-gray-700 font-semibold">Tasks</h2>
        <button
          onClick={() => setShowAddTask(!showAddTask)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-md text-sm font-medium"
        >
          <FaPlus size={16} /> Add Task
        </button>
      </div>
      {/* Filter and Summary */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
        <select className="bg-gray-800 text-gray-200 text-sm rounded-md px-3 py-2 outline-none">
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
        <TaskStatus />
      </div>
      {/* Add Task Input */}
      {showAddTask && <AddTask />}
      {/* Task List */}
      <TaskList />
    </div>
  );
};

export default Tasks;
