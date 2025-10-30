import { FaEdit, FaTrash } from "react-icons/fa";
import type { Task } from "../../contexts/tasks/TaskProvider";
import useTaskContext from "../../contexts/tasks/useTaskContext";

const TaskItem = ({ id, title }: Task) => {
  const { state, dispatch } = useTaskContext();

  const handleEditTask = (id: number) => {
    const editingTask = state.tasks.find((t) => (t.id === id ? t : null));

    if (editingTask) {
      dispatch({ type: "SELECT_EDIT", payload: editingTask });
    }
  };

  return (
    <div className="flex justify-between items-center bg-gray-700 px-3 py-2 rounded-md">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="accent-blue-500"
          onClick={() => dispatch({ type: "TOGGLE_TASK", payload: id })}
        />
        <span className="text-sm">{title}</span>
      </div>
      <div className="flex items-center gap-3 text-gray-400">
        <button
          onClick={() => handleEditTask(id)}
          className="hover:text-blue-400"
        >
          <FaEdit size={16} />
        </button>
        <button
          onClick={() => dispatch({ type: "DELETE_TASK", payload: id })}
          className="hover:text-red-400"
        >
          <FaTrash size={16} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
