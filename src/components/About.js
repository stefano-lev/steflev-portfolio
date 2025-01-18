import React from "react";

function About() {
  const sectionStyle = {
    margin: "40px 0",
    textAlign: "center",
    animation: "fadeIn 1.5s ease-in-out",
  };

  const headingStyle = {
    background: "linear-gradient(90deg, #ff8a00, #e52e71)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "2rem",
  };

  return (
    <section id="about" style={sectionStyle}>
      <h2 style={headingStyle}>About Me</h2>
      <p>
        I'm a passionate developer skilled in Python, JavaScript, and more. I
        love creating innovative solutions and experimenting with new
        technologies.
      </p>
    </section>
  );
}

export default About;
