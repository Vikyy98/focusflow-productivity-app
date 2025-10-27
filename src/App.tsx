import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import Settings from "./pages/Settings";
import Tasks from "./pages/Tasks";
import Timer from "./pages/Timer";
import MainLayout from "./layouts/MainLayout";
import { AppProvider } from "./contexts/AppProvider";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="notes" element={<Notes />} />
            <Route path="timer" element={<Timer />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
