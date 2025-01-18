import React from "react";

function Header() {
  const headerStyle = {
    background: "#333",
    color: "#fff",
    padding: "10px 20px",
    textAlign: "center",
  };

  const navLinkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 10px",
    transition: "color 0.3s ease-in-out",
  };

  return (
    <header style={headerStyle}>
      <h1>Welcome to My Portfolio</h1>
      <nav>
        <a href="#about" style={navLinkStyle}>About</a>
        <a href="#projects" style={navLinkStyle}>Projects</a>
        <a href="#contact" style={navLinkStyle}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
