import { ThemeContext } from "../../contexts/theme-context";
import { useContext } from "react";

function ThemeTogglerButton({ title }) {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <button
      className="header-toggle-button"
      onClick={() => toggleTheme()}
      style={{ backgroundColor: "transparent", color: theme.color.header }}
    >
      {title}
    </button>
  );
}

export default ThemeTogglerButton;
