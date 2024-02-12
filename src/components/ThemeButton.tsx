import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "../scss/components/ThemeButton.scss";
import { MoonIcon, SunIcon } from "lucide-react";

const ThemeButton = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <button onClick={changeTheme} className="ThemeButton">
      {theme === "light" ? <MoonIcon size={20} /> : <SunIcon size={20} />}
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeButton;
