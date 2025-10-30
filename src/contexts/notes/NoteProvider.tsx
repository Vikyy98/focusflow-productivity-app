import { useReducer, type ReactNode } from "react";
import { NoteContext } from "./NoteContext";

export interface NoteState {
  notes: Note[];
  mode: "view" | "add" | "edit";
  editNoteDetails: Note | null;
}

export interface Note {
  id: number;
  title: string;
  description: string;
}

export type NoteAction =
  | { type: "SET_MODE"; payload: "view" | "add" | "edit" }
  | { type: "ADD_NOTE"; payload: Note }
  | { type: "SELECT_EDIT"; payload: Note }
  | { type: "EDIT_NOTE"; payload: Note }
  | { type: "SHOW_CREATE_NOTE"; payload: boolean }
  | { type: "DELETE_NOTE"; payload: number };

const initialState: NoteState = {
  notes: [],
  mode: "view",
  editNoteDetails: null,
};

const notesReducer = (state: NoteState, action: NoteAction): NoteState => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, payload],
      };
    case "SET_MODE":
      return {
        ...state,
        mode: payload,
      };
    case "SELECT_EDIT":
      return {
        ...state,
        editNoteDetails: payload,
        mode: "edit",
      };
    case "EDIT_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id
            ? {
                ...note,
                title: payload.title,
                description: payload.description,
              }
            : note
        ),
        editNoteDetails: null,
        mode: "add",
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== payload),
        editNoteDetails: null,
      };
    default:
      return state;
  }
};

export const NoteProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};
