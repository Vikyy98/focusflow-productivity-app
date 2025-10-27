import { FaEdit, FaTrash } from "react-icons/fa";
import type { Task } from "../../contexts/AppProvider";
import useAppContext from "../../contexts/useContext";

const TaskItem = ({ id, title }: Task) => {
  const { dispatch } = useAppContext();

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
        <button className="hover:text-blue-400">
          <FaEdit size={16} />
        </button>
        <button className="hover:text-red-400">
          <FaTrash size={16} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
