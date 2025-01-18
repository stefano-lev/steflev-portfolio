import React from "react";

function Projects() {
  const sectionStyle = {
    margin: "40px 0",
    textAlign: "center",
    animation: "fadeIn 1.5s ease-in-out",
  };

  const projectGridStyle = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const projectCardStyle = {
    backgroundColor: "#1e1e1e",
    border: "1px solid #333",
    borderRadius: "8px",
    padding: "15px",
    width: "450px",
    height: "auto",
    margin: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.4)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const projectLinkStyle = {
    color: "#ff8a00",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <section id="projects" style={sectionStyle}>
      <h2>Projects</h2>
      <div style={projectGridStyle}>
        {/* Kanji Study Utility Project */}
        <div style={projectCardStyle}>
          <h3>Kanji Study Utility</h3>
          <p>A lightweight, web-based study tool for learning the Japanese language.</p>
          <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/screenshot2.jpg`}
                alt="Kanji Study Utility Screenshot 1"
                style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "8px" }}
              />
          </div>
          <a
            href="https://github.com/stefano-lev/kanji-study-utility"
            target="_blank"
            rel="noopener noreferrer"
            style={projectLinkStyle}
          >
            View on GitHub
          </a>
        </div>

        {/* py-image-stitcher Project */}
        <div style={projectCardStyle}>
          <h3>py-image-stitcher</h3>
          <p>A minimal, no-frills Python tool that aims to give users a portable application to share their memories.</p>
          <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/screenshot3.jpg`}
                alt="py-image-stitcher Screenshot 1"
                style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "8px" }}
              />
          </div>
          <a
            href="https://github.com/stefano-lev/py-image-stitcher"
            target="_blank"
            rel="noopener noreferrer"
            style={projectLinkStyle}
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
