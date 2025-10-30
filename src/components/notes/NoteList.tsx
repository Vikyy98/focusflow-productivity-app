import { useNoteContext } from "../../contexts/notes/useNoteContext";
import NoteCard from "./NoteCard";

const NoteList = () => {
  const { state } = useNoteContext();

  if (state.notes.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center py-16 text-center 
                      bg-white dark:bg-slate-900 rounded-xl shadow-sm border
                      border-slate-200 dark:border-slate-800 transition-colors duration-300"
      >
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200">
          No notes yet ✏️
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm max-w-sm">
          Create your first note using the form above to start organizing your
          thoughts.
        </p>
      </div>
    );
  }

  return (
    <div
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                 transition-all duration-300"
    >
      {state.notes.map((note) => (
        <NoteCard key={note.id} {...note} />
      ))}
    </div>
  );
};

export default NoteList;
