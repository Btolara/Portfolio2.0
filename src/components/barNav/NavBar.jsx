import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <a href="/" className="logo">
          Carlos Lara
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon" />
        </label>
        <ul className="menu">
          <li>
            <a href="#dont">About Me</a>
          </li>
          <li>
            <a href="#forget">My Experience</a>
          </li>
          <li>
            <a href="#forget">My Work</a>
          </li>
          <li>
            <a href="#forget">My Skills</a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
