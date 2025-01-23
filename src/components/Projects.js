import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

function Projects() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const projectData = [
    {
      title: "Kanji Study Utility",
      description: "A lightweight, web-based study tool for learning the Japanese language.",
      images: [
        `${process.env.PUBLIC_URL}/images/screenshot-kanji-1.jpg`,
        `${process.env.PUBLIC_URL}/images/screenshot-kanji-2.jpg`,
        `${process.env.PUBLIC_URL}/images/screenshot-kanji-3.jpg`,
      ],
      link: "https://github.com/stefano-lev/kanji-study-utility",
    },
    {
      title: "py-image-stitcher",
      description: "A minimal, no-frills Python tool that aims to give users a portable application to share their memories.",
      images: [
        `${process.env.PUBLIC_URL}images/screenshot-img-stitch-1.jpg`,
        `${process.env.PUBLIC_URL}/images/screenshot-img-stitch-2.jpg`,
      ],
      link: "https://github.com/stefano-lev/py-image-stitcher",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

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
    margin: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.4)",
  };

  const projectLinkStyle = {
    color: "#ff8a00",
    textDecoration: "none",
    fontWeight: "bold",
  };

  useEffect(() => {
    // Close the gallery when clicking outside
    const handleClickOutside = (event) => {
      const gallery = document.getElementById("lightbox-gallery");
      if (gallery && !gallery.contains(event.target)) {
        closeLightbox();
      }
    };

    if (isLightboxOpen) {
      // Add the event listener only when the lightbox is open
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isLightboxOpen]);

  return (
    <section id="projects" style={sectionStyle}>
      <h2>Projects</h2>
      <div style={projectGridStyle}>
        {projectData.map((project, projectIndex) => (
          <div key={projectIndex} style={projectCardStyle}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              <Slider {...sliderSettings}>
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} Screenshot ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                    onClick={() => openLightbox(project.images, index)}
                  />
                ))}
              </Slider>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={projectLinkStyle}
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>

      {isLightboxOpen && (
        <Lightbox
          id="lightbox-gallery"
          mainSrc={lightboxImages[currentImageIndex]}
          nextSrc={lightboxImages[(currentImageIndex + 1) % lightboxImages.length]}
          prevSrc={lightboxImages[(currentImageIndex + lightboxImages.length - 1) % lightboxImages.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setCurrentImageIndex((currentImageIndex + lightboxImages.length - 1) % lightboxImages.length)
          }
          onMoveNextRequest={() =>
            setCurrentImageIndex((currentImageIndex + 1) % lightboxImages.length)
          }
        />
      )}
    </section>
  );
}

export default Projects;
