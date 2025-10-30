import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useThemeContext } from "../../contexts/theme/useThemeContext";

const Navbar = () => {
  const location = useLocation();
  const { state, dispatch } = useThemeContext();

  // Apply/remove dark class to <html> tag based on theme
  useEffect(() => {
    if (state.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    console.log("Theme changed to:", state.theme);
  }, [state.theme]);

  // Handle theme change
  const handleThemeToggle = (selectedTheme: "light" | "dark") => {
    dispatch({ type: "SET_THEME", payload: selectedTheme });
  };

  // Determine page heading from route
  const getNavbarHeading = () => {
    switch (location.pathname) {
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

  const pathName = getNavbarHeading();

  return (
    <header className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 p-4 flex justify-between items-center text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Left - Page Title */}
      <h1 className="text-xl font-semibold">{pathName}</h1>

      {/* Right - Welcome + Theme Toggle */}
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Welcome,{" "}
          <span className="font-medium text-gray-900 dark:text-gray-100">
            Vigneshwaran 👋
          </span>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full border border-gray-300 dark:border-gray-600 shadow-inner transition-colors duration-300">
          {/* Light Button */}
          <button
            onClick={() => handleThemeToggle("light")}
            aria-label="Switch to Light Theme"
            aria-pressed={state.theme === "light"}
            className={`p-2 rounded-full transition-all duration-200 ${
              state.theme === "light"
                ? "bg-yellow-400 text-gray-900 shadow-md"
                : "text-yellow-400 hover:text-yellow-300"
            }`}
          >
            <FaSun size={16} />
          </button>

          {/* Dark Button */}
          <button
            onClick={() => handleThemeToggle("dark")}
            aria-label="Switch to Dark Theme"
            aria-pressed={state.theme === "dark"}
            className={`p-2 rounded-full transition-all duration-200 ${
              state.theme === "dark"
                ? "bg-blue-600 text-white shadow-md"
                : "text-blue-400 hover:text-blue-300"
            }`}
          >
            <FaMoon size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
