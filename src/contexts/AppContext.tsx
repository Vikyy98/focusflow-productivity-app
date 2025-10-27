import { createContext } from "react";
import type { AppState, Action } from "./AppProvider";

export interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}
export const AppContext = createContext<AppContextType | undefined>(undefined);
