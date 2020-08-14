import React from "react";

const MenuBar = () => {
  return (
    <div>
      <nav
        className="menuNav"
        style={{
          lineHeight: "3",
          justifyContent: "space-evenly",
          alignSelf: "center"
        }}
      >
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#mySkills">Skills</a>
          </li>
          <li>
            <a href="#myEducation">Education</a>
          </li>
          <li>
            <a href="#myExperience">Experience</a>
          </li>
          <li>
            <a href="#myWork">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuBar;
