import React from "react";

function Contact() {
  const sectionStyle = {
    margin: "40px 0",
    textAlign: "center",
    animation: "fadeIn 1.5s ease-in-out",
  };

  const emailStyle = {
    color: "#ff8a00",
    textDecoration: "none",
    fontSize: "1.2rem",
    fontWeight: "bold",
    textShadow: "0 0 5px #ff8a00",
  };

  return (
    <section id="contact" style={sectionStyle}>
      <h2>Contact</h2>
      <p>
        Email:{" "}
        <a
          href="mailto:stefano-lev@protonmail.com"
          style={emailStyle}
        >
          stefano-lev@protonmail.com
        </a>
      </p>
    </section>
  );
}

export default Contact;
