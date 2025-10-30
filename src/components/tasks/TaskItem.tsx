import { FaEdit, FaTrash } from "react-icons/fa";
import type { Task } from "../../contexts/tasks/TaskProvider";
import useTaskContext from "../../contexts/tasks/useTaskContext";

const TaskItem = ({ id, title, status }: Task) => {
  const { state, dispatch } = useTaskContext();

  const handleEditTask = (id: number) => {
    const editingTask = state.tasks.find((t) => t.id === id);
    if (editingTask) {
      dispatch({ type: "SELECT_EDIT", payload: editingTask });
    }
  };

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

  return (
    <div
      className={`flex justify-between items-center px-4 py-3 rounded-lg border shadow-sm
                  bg-white text-slate-900 border-slate-200
                  dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700
                  transition-all duration-200 hover:shadow-md hover:-translate-y-0.5`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={status === "completed"}
          onChange={handleToggle}
          className="size-4 accent-blue-500 cursor-pointer"
        />
        <span
          className={`text-sm ${
            status === "completed"
              ? "line-through text-slate-400 dark:text-slate-500"
              : "text-slate-800 dark:text-slate-100"
          } transition`}
        >
          {title}
        </span>
      </div>

      <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
        <button
          onClick={() => handleEditTask(id)}
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          title="Edit task"
        >
          <FaEdit size={15} />
        </button>

        <button
          onClick={() => dispatch({ type: "DELETE_TASK", payload: id })}
          className="hover:text-red-600 dark:hover:text-red-400 transition"
          title="Delete task"
        >
          <FaTrash size={15} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
