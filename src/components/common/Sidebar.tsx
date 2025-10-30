import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 rounded-md text-sm ${
      isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-100"
    }`;

  return (
    <aside className="w-56 bg-white border-r p-4">
      <h2 className="text-lg font-bold mb-4">Focus Flow</h2>
      <nav className="flex flex-col space-y-2">
        <NavLink to="/" className={linkClasses}>
          Dashboard
        </NavLink>
        <NavLink to="/tasks" className={linkClasses}>
          Tasks
        </NavLink>
        <NavLink to="/notes" className={linkClasses}>
          Notes
        </NavLink>
        <NavLink to="/timer" className={linkClasses}>
          Timer
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
