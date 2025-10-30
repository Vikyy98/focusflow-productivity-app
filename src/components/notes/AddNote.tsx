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
        title,
        description,
      };
      dispatch({ type: "ADD_NOTE", payload: newNote });
    } else if (state.mode === "edit" && state.editNoteDetails) {
      const updatedNote: Note = {
        id: state.editNoteDetails.id,
        title,
        description,
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
    }
  }, [state.mode, state.editNoteDetails]);

  return (
    <div
      className="p-5 rounded-xl mb-6 shadow-md 
                    bg-white text-slate-900 
                    dark:bg-slate-800 dark:text-slate-100
                    transition-colors duration-300"
    >
      <h3 className="text-lg font-semibold mb-3">
        {(state.mode === "add" || state.mode === "view") && "Create a new note"}
        {state.mode === "edit" && "Edit note"}
      </h3>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Note title..."
          className="rounded-md px-3 py-2 text-sm outline-none border
                     bg-slate-100 text-slate-900 placeholder-slate-500
                     dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400 dark:border-slate-600
                     focus:ring-2 focus:ring-blue-500 transition"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write your note..."
          rows={4}
          className="rounded-md px-3 py-2 text-sm outline-none resize-none border
                     bg-slate-100 text-slate-900 placeholder-slate-500
                     dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400 dark:border-slate-600
                     focus:ring-2 focus:ring-blue-500 transition"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={handleSaveNote}
          className="self-end w-fit px-4 py-2 rounded-md text-sm font-medium
                     bg-blue-600 hover:bg-blue-700 text-white 
                     dark:bg-blue-500 dark:hover:bg-blue-600
                     transition-all"
        >
          Save Note
        </button>
      </div>
    </div>
  );
};

export default AddNote;
