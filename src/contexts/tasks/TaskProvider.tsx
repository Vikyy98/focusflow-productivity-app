import { useReducer, type ReactNode } from "react";
import { TaskContext } from "./TaskContext";

type TaskStatus = "completed" | "pending";

export interface TaskState {
  tasks: Task[];
  taskCompletionDetails: TaskCompletionDetails;
  editTask: Task | null;
  isEditing: boolean;
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

const initialState: TaskState = {
  tasks: [
    {
      id: 1,
      title: "Buy Show",
      status: "pending",
    },
  ],
  taskCompletionDetails: {
    completedCount: 0,
    totalCount: 0,
  },
  editTask: null,
  isEditing: false,
};

export type Action =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "TOGGLE_TASK"; payload: number }
  | { type: "SELECT_EDIT"; payload: Task | null }
  | { type: "EDIT_TASK"; payload: Task | null }
  | { type: "DELETE_TASK"; payload: number };

const appReducer = (state: TaskState, action: Action): TaskState => {
  const { type, payload } = action;

  switch (type) {
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
    case "SELECT_EDIT":
      return {
        ...state,
        editTask: payload,
        isEditing: true,
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((t: Task) =>
          t.id === payload?.id ? { ...t, title: payload.title } : t
        ),
        isEditing: false,
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((t: Task) => t.id !== payload),
      };
    default:
      return {
        ...state,
      };
  }
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
