import { useEffect, useState } from "react";
import type { Note } from "../../contexts/notes/NoteProvider";
import { useNoteContext } from "../../contexts/notes/useNoteContext";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { state, dispatch } = useNoteContext();

  const handleSaveNote = () => {
    if (state.mode === "add") {
      const newNote: Note = {
        id: Date.now(),
        title: title,
        description: description,
      };
      dispatch({ type: "ADD_NOTE", payload: newNote });
    } else if (state.mode === "edit" && state.editNoteDetails) {
      const updatedNote: Note = {
        id: state.editNoteDetails?.id,
        title: title,
        description: description,
      };
      dispatch({ type: "EDIT_NOTE", payload: updatedNote });
    }
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    if (state.mode === "edit") {
      setTitle(state.editNoteDetails?.title || "");
      setDescription(state.editNoteDetails?.description || "");
      console.log("Editing note:", state.editNoteDetails);
    }
  }, [state.mode, state.editNoteDetails]);

  return (
    <div className="bg-gray-800 p-4 rounded-xl mb-6 shadow-lg">
      <h3 className="text-lg font-semibold mb-3 text-gray-100">
        {(state.mode === "add" || state.mode == "view") && "Create a new note"}
        {state.mode === "edit" && "Edit note"}
      </h3>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Note title..."
          className="bg-gray-700 text-gray-200 placeholder-gray-500 border border-gray-600 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your note..."
          rows={4}
          className="bg-gray-700 text-gray-200 placeholder-gray-500 border border-gray-600 rounded-md px-3 py-2 text-sm outline-none resize-none focus:ring-2 focus:ring-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          onClick={handleSaveNote}
          className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-md text-sm font-medium w-fit self-end"
        >
          Save Note
        </button>
      </div>
    </div>
  );
};

export default AddNote;
