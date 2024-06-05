import React, { useEffect, useState } from "react";
import {
  Wrapper,
  ContentTopInner,
  ContentMid,
  VideoWrapper,
  TopTwoBtn,
} from "./section.style";
import Link from "next/link";

const mobileImages = [
  "/images/radiation-Safety-mobile1.jpg",
  // "/images/radiation-Safety-mobile2.jpg",
  "/images/radiation-Safety-mobile3.jpg",
];

const desktopImages = [
  "/images/radiation-Safety1.jpeg",
  // "/images/radiation-Safety2.jpeg",
  "/images/radiation-Safety3.jpeg",
];

function GammaEyespecs({ backgroundImg, backgroundVideo, metaData, arrow }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [color, setColor] = useState("#fff");
  const [logoSrc, setLogoSrc] = useState("/images/RAVIN_CAM_logo-light.png");

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

  if (!metaData) return null;

  useEffect(() => {
    const updateColorAndLogo = () => {
      if (currentIndex === 0) {
        setColor("black");
        setLogoSrc("/images/RAVIN_CAM_logo-dark.png");
      } else {
        setColor("white");
        setLogoSrc("/images/RAVIN_CAM_logo-dark.png");
      }
    };

    updateColorAndLogo();

    const intervalId = setInterval(updateColorAndLogo, 4000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const renderWordsInRows = (text) => {
    if (!text) return null;
    return text.split(" ").map((word, index) => (
      <div key={index} style={{ marginBottom: "5px" }}>
        {word}
      </div>
    ));
  };

  return (
    <>
      <Wrapper bg={backgroundVideo ? null : backgroundImg}>
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

        <ContentTopInner currentIndex={currentIndex}>
          <img
            className="RAVIN_CAM_logo"
            src={isMobile ? "/images/RAVIN_CAM_logo-light.png" : logoSrc}
            alt=""
          />

          <div className="hero-text" style={{ color: "#fff !important" }}>
            {metaData.Description}
          </div>
        </ContentTopInner>

        <div>
          <ContentMid className={arrow ? "" : "buttons"}>
            {metaData.stats &&
              metaData.stats.map((stat) => (
                <div className="Statsbtn" key={stat.id}>
                  <button>{renderWordsInRows(stat.name)}</button>
                </div>
              ))}
          </ContentMid>
        </div>

        <TopTwoBtn>
          {metaData.Buttons &&
            metaData.Buttons.map((button) => (
              <div key={button.id}>
                <Link href={button.url}>
                  <button
                    className={button.id === 1 ? "rightTopbtn" : "leftTopbtn"}
                    style={{ cursor: "pointer" }}
                  >
                    {button.name}
                  </button>
                </Link>
              </div>
            ))}
        </TopTwoBtn>
      </Wrapper>
    </>
  );
}

export default GammaEyespecs;
