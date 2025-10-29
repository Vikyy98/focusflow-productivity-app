import AddNote from "../components/notes/AddNote";
import NoteList from "../components/notes/NoteList";
import { useNoteContext } from "../contexts/notes/useNoteContext";

const Notes = () => {
  const { state, dispatch } = useNoteContext();

  return (
    <div className="p-6 text-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Notes</h2>
        <button
          onClick={() =>
            dispatch({
              type: "SHOW_CREATE_NOTE",
              payload: !state.isAddClicked,
            })
          }
          className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-md text-sm font-medium"
        >
          + Add Note
        </button>
      </div>
      {(state.isAddClicked || state.isEditClicked) && <AddNote />}
      <NoteList />
    </div>
  );
};

export default Notes;
