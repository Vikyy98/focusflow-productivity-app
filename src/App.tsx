import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import Tasks from "./pages/Tasks";
import Timer from "./pages/Timer";
import MainLayout from "./layouts/MainLayout";
import { AppProviders } from "./contexts/AppProvider";

function App() {
  return (
    <AppProviders>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="notes" element={<Notes />} />
            <Route path="timer" element={<Timer />} />
          </Route>
        </Routes>
      </Router>
    </AppProviders>
  );
}

export default App;
