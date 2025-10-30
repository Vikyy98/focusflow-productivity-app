import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaStickyNote,
  FaClock,
  FaBullseye,
} from "react-icons/fa";

const Sidebar = () => {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
     ${
       isActive
         ? "bg-blue-600 text-white shadow-sm"
         : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white"
     }`;

  return (
    <aside
      className="w-60 h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800
                 p-5 flex flex-col transition-colors duration-300"
    >
      {/* App Title */}
      <h2 className="flex text-2xl font-extrabold tracking-tight mb-8 text-slate-900 dark:text-white">
        <FaBullseye
          size={25}
          className="mt-1 mr-1 text-blue-600 dark:text-blue-400"
        />
        FocusFlow
      </h2>

      {/* Navigation */}
      <nav className="flex flex-col space-y-2">
        <NavLink to="/" className={linkClasses} end>
          <FaHome size={16} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/tasks" className={linkClasses}>
          <FaTasks size={16} />
          <span>Tasks</span>
        </NavLink>

        <NavLink to="/notes" className={linkClasses}>
          <FaStickyNote size={16} />
          <span>Notes</span>
        </NavLink>

        <NavLink to="/timer" className={linkClasses}>
          <FaClock size={16} />
          <span>Timer</span>
        </NavLink>
      </nav>

      {/* Footer (optional) */}
      <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400">
        <p>© 2025 FocusFlow</p>
      </div>
    </aside>
  );
};

export default Sidebar;
