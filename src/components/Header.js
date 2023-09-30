import { useEffect, useState } from "react";
import Logo from "./../assets/task.png";
import "./header.css";

export const Header = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Taskmate Logo" />
        <span>Taskmate</span>
      </div>
      <div className="themeSelector">
        <span
          onClick={() => setTheme("light")}
          className={theme === "light" ? "light active" : "light"}
        ></span>
        <span
          onClick={() => setTheme("medium")}
          className={theme === "medium" ? "medium active" : "medium"}
        ></span>
        <span
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? "dark active" : "dark"}
        ></span>
        <span
          onClick={() => setTheme("gOne")}
          className={theme === "gOne" ? "gOne active" : "gOne"}
        ></span>
      </div>
    </header>
  );
};
