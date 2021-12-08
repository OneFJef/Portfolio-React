import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <h1>Jef Mitchell</h1>
      <nav className="nav-links">
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
          <li>
            <a href="./assests/files/resume.pdf" download>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
