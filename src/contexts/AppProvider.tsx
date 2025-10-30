import { type ReactNode } from "react";
import { ThemeProvider } from "./theme/ThemeProvider";
import { TaskProvider } from "./tasks/TaskProvider";
import { NoteProvider } from "./notes/NoteProvider";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <TaskProvider>
        <NoteProvider>{children}</NoteProvider>
      </TaskProvider>
    </ThemeProvider>
  );
};
