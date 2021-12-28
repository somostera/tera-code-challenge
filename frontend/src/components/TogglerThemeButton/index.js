import { ThemeContext } from "../../contexts/theme-context";
import { useContext } from "react";

function ThemeTogglerButton({ title }) {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  const { toggleTheme, theme } = useContext(ThemeContext);
  console.log(theme, "button");
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
