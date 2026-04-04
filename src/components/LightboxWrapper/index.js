import React, { useState, useCallback } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const LightboxWrapper = ({ children }) => {
  return <>{children}</>;
};

export const SRLWrapper = ({ children }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = useCallback((e) => {
    const img = e.target.tagName === "IMG" ? e.target : e.target.closest("img");

    if (!img) return;

    const container = e.currentTarget;

    const imgs = Array.from(container.querySelectorAll("img"));

    const allSlides = imgs
      .filter((img) => img.src)
      .map((img) => ({
        src: img.src,
        alt: img.alt || "",
      }));

    if (allSlides.length === 0) return;

    const index = allSlides.findIndex((s) => s.src === img.src);

    setSlides(allSlides);
    setCurrentIndex(index >= 0 ? index : 0);
    setLightboxOpen(true);
  }, []);

  return (
    <div onClick={handleClick} style={{ cursor: "zoom-in" }}>
      {children}

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={currentIndex}
        on={{
          view: ({ index }) => setCurrentIndex(index),
        }}
      />
    </div>
  );
};

export default LightboxWrapper;
