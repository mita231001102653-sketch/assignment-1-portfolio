import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#hero" className="brand-logo">Mita Kar</a>
        <ul className="nav-links">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#education" className="nav-link">Education</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
