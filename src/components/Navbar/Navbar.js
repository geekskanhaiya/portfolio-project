import { useEffect } from "react";
import navLogo from "./favicon.png";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar({ mode, setMode }) {
  const toggleMode = () => {
    if (mode === "light-theme") {
      localStorage.setItem("mode", "toggle-dark-mode");
      setMode("toggle-dark-mode");
    } else {
      localStorage.setItem("mode", "light-theme");
      setMode("light-theme");
    }
  };
  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        mode === "light-theme" ? "light" : "dark"
      } py-4 ${styles.navbar}`}
    >
      <NavLink className="navbar-brand" to="/">
        <img
          src={navLogo}
          width={35}
          height={35}
          className="d-inline-block align-top mx-2"
          alt="Navbar icon"
          id="navbar-image"
        />
        <span className="orange_text"> K</span>anhaiya
        <span className="orange_text"> K</span>umar
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ border: "none" }}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className={`navbar-nav ml-auto mr-5 ${styles.nav_item_container}`}>
          <li className={`${styles.nav_item} nav-item mx-2`}>
            <NavLink
              className="nav-link"
              to="/"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
            >
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className={`${styles.nav_item} nav-item mx-2`}>
            <NavLink
              className="nav-link"
              to="/about"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
            >
              About
            </NavLink>
          </li>
          <li className={`${styles.nav_item} nav-item mx-2`}>
            <NavLink
              className="nav-link"
              to="/projects"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
            >
              Projects
            </NavLink>
          </li>
          <li className={`${styles.nav_item} nav-item mx-2`}>
            <NavLink
              className="nav-link"
              to="/contact"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
            >
              Contact Me
            </NavLink>
          </li>
          <li className={`${styles.nav_item} nav-item mx-2`}>
            <NavLink
              className="nav-link"
              to="/courses"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
            >
              Courses
            </NavLink>
          </li>
          <li className={`nav-item mx-2`}>
            <button
              className={`nav-link ${styles.mode}  button`}
              id="toggle-dark-btn"
              onClick={() => toggleMode()}
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              style={{ width: "100%" }}
            >
              <i
                className={`fa-solid fa-${
                  mode === "light-theme" ? "moon" : "sun"
                } mr-1`}
              />
              <span id="dark-text" className={`${styles.dark_text}`}>
                {mode === "light-theme" ? "Dark Mode" : "Light Mode"}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
