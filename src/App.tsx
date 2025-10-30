import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import Tasks from "./pages/Tasks";
import Timer from "./pages/Timer";
import MainLayout from "./layouts/MainLayout";
import { TaskProvider } from "./contexts/tasks/TaskProvider";
import { NoteProvider } from "./contexts/notes/NoteProvider";
import { ThemeProvider } from "./contexts/theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route
              path="tasks"
              element={
                <TaskProvider>
                  <Tasks />
                </TaskProvider>
              }
            />
            <Route
              path="notes"
              element={
                <NoteProvider>
                  <Notes />
                </NoteProvider>
              }
            />
            <Route path="timer" element={<Timer />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
