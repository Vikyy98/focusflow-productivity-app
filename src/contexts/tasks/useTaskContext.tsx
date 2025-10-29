import { useContext } from "react";
import { TaskContext } from "./TaskContext";

const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context)
    throw new Error("useTaskContext must be used within TaskProvider");
  return context;
};

export default useTaskContext;
