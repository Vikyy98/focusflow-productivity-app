import React from "react";
import type { ThemeAction, ThemeState } from "./ThemeProvider";

export interface ThemeContextType {
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
}

export const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);
