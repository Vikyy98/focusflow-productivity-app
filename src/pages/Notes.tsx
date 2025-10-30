import AddNote from "../components/notes/AddNote";
import NoteList from "../components/notes/NoteList";
import { useNoteContext } from "../contexts/notes/useNoteContext";

const Notes = () => {
  const { state, dispatch } = useNoteContext();

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300 rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Notes
        </h2>
        <button
          onClick={() =>
            dispatch({
              type: "SET_MODE",
              payload: "add",
            })
          }
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm transition"
        >
          + Add Note
        </button>
      </div>

      {/* Add/Edit Section */}
      {(state.mode === "add" || state.mode === "edit") && <AddNote />}

      {/* Notes Grid */}
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md transition-colors duration-300">
        {state.notes.length > 0 ? (
          <NoteList />
        ) : (
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center py-8">
            No notes yet. Start by adding one!
          </p>
        )}
      </div>
    </div>
  );
};

export default Notes;
