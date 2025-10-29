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
    <div className="bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition border border-gray-700 flex flex-col justify-between">
      <div>
        <h4 className="text-lg font-semibold text-gray-100 mb-2">
          {note.title}
        </h4>
        <p className="text-sm text-gray-400">{note.description}</p>
      </div>

      <div className="flex justify-end gap-3 mt-4 text-gray-400">
        <button className="hover:text-blue-400">
          <FaEdit
            onClick={() => dispatch({ type: "SELECT_EDIT", payload: note })}
            size={16}
          />
        </button>
        <button
          onClick={() => dispatch({ type: "DELETE_NOTE", payload: note.id })}
          className="hover:text-red-400"
        >
          <FaTrash size={16} />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
