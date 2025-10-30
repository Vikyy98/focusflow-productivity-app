import TaskStatus from "../components/tasks/TaskStatus";
import TaskList from "../components/tasks/TaskList";
import AddTask from "../components/tasks/AddTask";
import NoteList from "../components/notes/NoteList";
import AddNote from "../components/notes/AddNote";

const Dashboard = () => {
  return (
    <div
      className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100
                 transition-colors duration-300 p-6 md:p-10 space-y-10"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Your productivity overview — manage tasks & notes efficiently.
          </p>
        </div>
      </div>

      {/* Task Section */}
      <section
        className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700
                   shadow-sm transition-all duration-300"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5">
          <h2 className="text-xl font-semibold">🧩 Tasks</h2>
          <TaskStatus />
        </div>

        <AddTask />
        <TaskList />
      </section>

      {/* Notes Section */}
      <section
        className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700
                   shadow-sm transition-all duration-300"
      >
        <h2 className="text-xl font-semibold mb-5">📝 Notes</h2>
        <AddNote />
        <NoteList />
      </section>

      {/* Productivity Summary (Optional Future Section) */}
      <section
        className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700
                   shadow-sm transition-all duration-300"
      >
        <h2 className="text-xl font-semibold mb-5">📊 Productivity Summary</h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          Coming soon — track your daily focus time, note activity, and task
          completion trends.
        </p>
      </section>
    </div>
  );
};

export default Dashboard;
