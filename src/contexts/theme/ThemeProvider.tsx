import { useReducer } from "react";
import { ThemeContext } from "./ThemeContext";

export interface ThemeState {
  theme: "light" | "dark";
}

export type ThemeAction = { type: "SET_THEME"; payload: "light" | "dark" };

const initialState: ThemeState = {
  theme: "light",
};

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
