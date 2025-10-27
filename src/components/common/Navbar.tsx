import { useLocation } from "react-router-dom";
import { useMemo } from "react";

const Navbar = () => {
  const location = useLocation();

  const handleNavbarHeading = () => {
    const currentPath = location.pathname;
    switch (currentPath) {
      case "/":
        return "Dashboard";
      case "/tasks":
        return "Tasks";
      case "/notes":
        return "Notes";
      case "/timer":
        return "Timer";
      case "/settings":
        return "Settings";
      default:
        return "";
    }
  };

  const pathName = useMemo(() => handleNavbarHeading(), [location.pathname]);

  return (
    <header className="bg-white border-b p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">{pathName}</h1>
      <div className="text-sm text-gray-600">Welcome, Vigneshwaran 👋</div>
    </header>
  );
};

export default Navbar;
