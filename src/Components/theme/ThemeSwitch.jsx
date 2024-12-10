import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa"; // Optional: add icons for dark/light theme

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`w-12 h-6 flex items-center rounded-full p-1 ${theme === "dark" ? "bg-gray-700" : "bg-gray-300"}`}
      aria-label="Toggle theme"
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform duration-600 ${theme === "dark" ? "translate-x-6" : ""}`}
      >
        {/* Optional: Icon Change */}
        {theme === "dark" ? (
          <FaSun className="text-yellow-500" size={16} />
        ) : (
          <FaMoon className="text-gray-600" size={16} />
        )}
      </div>
    </button>
  );
};

export default ThemeSwitch;
