import { createContext } from "react";
import type { NoteAction, NoteState } from "./NoteProvider";

export interface NoteContextType {
  state: NoteState;
  dispatch: React.Dispatch<NoteAction>;
}

export const NoteContext = createContext<NoteContextType | undefined>(
  undefined
);
