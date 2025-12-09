import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Button() {
  const { theme, toggleTheme } = useContext(ThemeContext); // get both

  return (
    <button
      onClick={toggleTheme} // toggle on click
      style={{
        background: theme === "dark" ? "#3d16ccff" : "#fff",
        color: theme === "dark" ? "#fff" : "#0a0000ff",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer"
      }}
    >
      Toggle Theme
    </button>
  );
}

export default Button;
