import { FaEdit, FaTrash } from "react-icons/fa";
import { useNoteContext } from "../../contexts/notes/useNoteContext";

interface NoteCardProps {
  id: number;
  title: string;
  description: string;
}

const NoteCard = (note: NoteCardProps) => {
  const { dispatch } = useNoteContext();

  return (
    <div
      className="p-4 rounded-xl shadow-sm border
                 bg-white text-slate-900 border-slate-200
                 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700
                 hover:shadow-md hover:-translate-y-0.5
                 transition-all duration-200 flex flex-col justify-between"
    >
      <div>
        <h4 className="text-lg font-semibold mb-2">{note.title}</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {note.description}
        </p>
      </div>

      <div className="flex justify-end gap-4 mt-4 text-slate-500 dark:text-slate-400">
        <button
          onClick={() => dispatch({ type: "SELECT_EDIT", payload: note })}
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          title="Edit note"
        >
          <FaEdit size={16} />
        </button>

        <button
          onClick={() => dispatch({ type: "DELETE_NOTE", payload: note.id })}
          className="hover:text-red-600 dark:hover:text-red-400 transition"
          title="Delete note"
        >
          <FaTrash size={16} />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
