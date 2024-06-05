import React, { useEffect, useState } from "react";
import {
  Wrapper,
  ContentTopInner,
  ContentMid,
  VideoWrapper,
} from "./section.style";
import Link from "next/link";

const desktopImages = [
  "/images/Home1.jpeg",
  // "/images/Home2.jpeg",
  "/images/Home3.jpeg",
];

const mobileImages = [
  "/images/MobileHome1.jpg",
  // "/images/MobileHome2.png",
  "/images/MobileHome3.jpg",
];

function RadiationSafety({ data }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [color, setColor] = useState("#fff");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const updateColor = () => {
      if (currentIndex === 2 || currentIndex === 1 || currentIndex === 0) {
        setColor("black");
      } else {
        setColor("white");
      }
    };

    updateColor();

    const intervalId = setInterval(updateColor, 4000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const formattedTitle =
    currentIndex === 1 ? data?.Title?.split(" ").join("\n") : data?.Title;

  return (
    <>
      <Wrapper>
        <VideoWrapper>
          <div className="image-rotator">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                className={index === currentIndex ? "active" : ""}
              />
            ))}
          </div>
        </VideoWrapper>

        <ContentTopInner>
          <h1
            style={{
              color: "#414141",
            }}
            className={`headings index-${currentIndex}`}
          >
            {formattedTitle}
          </h1>
        </ContentTopInner>

        <div>
          <ContentMid>
            {data.Buttons.map((button, index) => (
              <div key={index}>
                <Link
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                  href={button?.url}
                >
                  <button
                    style={{ cursor: "pointer" }}
                    className={button?.name === "Order" ? "center" : "left"}
                  >
                    {button?.name}
                  </button>
                </Link>
              </div>
            ))}
          </ContentMid>
        </div>
      </Wrapper>
    </>
  );
}

export default RadiationSafety;
