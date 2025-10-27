import { useReducer, type ReactNode } from "react";
import { AppContext } from "./AppContext";

type TaskStatus = "completed" | "pending";
type Theme = "light" | "dark";

export interface AppState {
  tasks: Task[];
  notes: Note[];
  taskCompletionDetails: TaskCompletionDetails;
  isTimerRunning: boolean;
  theme: Theme;
}

export interface TaskCompletionDetails {
  totalCount: number;
  completedCount: number;
}

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

export interface Note {
  id: number;
  title: string;
  status: TaskStatus;
}

const initialState: AppState = {
  tasks: [
    {
      id: 1,
      title: "Buy Show",
      status: "pending",
    },
  ],
  notes: [],
  taskCompletionDetails: {
    completedCount: 0,
    totalCount: 0,
  },
  isTimerRunning: false,
  theme: "light",
};

export type Action =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "ADD_NOTE"; payload: Note }
  | { type: "TOGGLE_TASK"; payload: number };

const appReducer = (state: AppState, action: Action): AppState => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, payload],
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((t: Task) =>
          t.id === payload ? { ...t, status: "completed" } : t
        ),
      };
    default:
      return {
        ...state,
      };
  }
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
