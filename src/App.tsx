import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./scss/App.scss";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
