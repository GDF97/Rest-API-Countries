import { Link } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import "../scss/components/Navbar.scss";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme}`}>
      <Link to={"/"}>Where in the World?</Link>
      <ThemeButton />
    </header>
  );
};

export default Navbar;
