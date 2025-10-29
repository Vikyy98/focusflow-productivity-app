import { createContext } from "react";
import type { TaskState, Action } from "./TaskProvider";

export interface TaskContextType {
  state: TaskState;
  dispatch: React.Dispatch<Action>;
}
export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);
