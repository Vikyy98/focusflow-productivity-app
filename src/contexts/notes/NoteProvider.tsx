import { useReducer, type ReactNode } from "react";
import { NoteContext } from "./NoteContext";

export interface NoteState {
  notes: Note[];
  isAddClicked: boolean;
  isEditClicked: boolean;
  editNoteDetails: Note | null;
}

export interface Note {
  id: number;
  title: string;
  description: string;
}

export type NoteAction =
  | { type: "ADD_NOTE"; payload: Note }
  | { type: "SELECT_EDIT"; payload: Note }
  | { type: "EDIT_NOTE"; payload: Note }
  | { type: "SHOW_CREATE_NOTE"; payload: boolean }
  | { type: "DELETE_NOTE"; payload: number };

const initialNoteData: Note[] = [
  {
    id: 1,
    title: "Meeting Notes",
    description: "Prepare slides for client call.",
  },
  {
    id: 2,
    title: "Grocery List",
    description: "Milk, bread, fruits, and eggs.",
  },
  {
    id: 3,
    title: "Project Ideas",
    description: "Create a habit tracker or task manager app.",
  },
];

const initialState: NoteState = {
  notes: initialNoteData,
  isAddClicked: false,
  isEditClicked: false,
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
    case "SHOW_CREATE_NOTE":
      return {
        ...state,
        isEditClicked: false,
        isAddClicked: payload,
      };
    case "SELECT_EDIT":
      return {
        ...state,
        editNoteDetails: payload,
        isEditClicked: true,
        isAddClicked: false,
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
        isEditClicked: false,
        isAddClicked: true,
        editNoteDetails: null,
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
