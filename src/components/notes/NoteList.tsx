import { useNoteContext } from "../../contexts/notes/useNoteContext";
import NoteCard from "./NoteCard";

const NoteList = () => {
  const { state } = useNoteContext();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {state.notes.map((note) => (
        <NoteCard key={note.id} {...note} />
      ))}
    </div>
  );
};

export default NoteList;
