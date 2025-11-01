import { useReducer, type ReactNode } from "react";
import { TaskContext } from "./TaskContext";

type TaskStatus = "completed" | "pending";

export interface TaskState {
  tasks: Task[];
  taskCompletionDetails: TaskCompletionDetails;
  editTask: Task | null;
  mode: "view" | "add" | "edit";
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
  tasks: [],
  taskCompletionDetails: {
    completedCount: 0,
    totalCount: 0,
  },
  editTask: null,
  mode: "view",
};

export type Action =
  | { type: "SET_MODE"; payload: "view" | "add" | "edit" }
  | { type: "ADD_TASK"; payload: Task }
  | { type: "SELECT_EDIT"; payload: Task }
  | { type: "EDIT_TASK"; payload: Task }
  | { type: "TOGGLE_TASK"; payload: number }
  | { type: "DELETE_TASK"; payload: number };

const appReducer = (state: TaskState, action: Action): TaskState => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, payload],
        taskCompletionDetails: {
          ...state.taskCompletionDetails,
          totalCount: state.taskCompletionDetails.totalCount + 1,
        },
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((t: Task) =>
          t.id === payload ? { ...t, status: "completed" } : t
        ),
        taskCompletionDetails: {
          ...state.taskCompletionDetails,
          completedCount: state.taskCompletionDetails.completedCount + 1,
        },
      };
    case "SET_MODE":
      return {
        ...state,
        mode: payload,
      };
    case "SELECT_EDIT":
      return {
        ...state,
        editTask: payload,
        mode: "edit",
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((t: Task) =>
          t.id === payload?.id ? { ...t, title: payload.title } : t
        ),
        editTask: null,
        mode: "add",
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((t: Task) => t.id !== payload),
        editTask: null,
        mode: "add",
        taskCompletionDetails: {
          ...state.taskCompletionDetails,
          completedCount:
            state.taskCompletionDetails.completedCount != 0
              ? state.taskCompletionDetails.completedCount - 1
              : 0,
          totalCount: state.taskCompletionDetails.totalCount - 1,
        },
      };
    default:
      return state;
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
