import { Link } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import "../scss/components/Navbar.scss";

const Navbar = () => {
  return (
    <header className="header">
      <Link to={"/"}>Where in the World?</Link>
      <ThemeButton />
    </header>
  );
};

export default Navbar;
