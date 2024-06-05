import React from "react";
import {
  Wrapper,
  ContentTopInner,
  ContentMid,
  VideoWrapper,
} from "./section.style";
import Link from "next/link";

function Extravasations({ backgroundImg, backgroundVideo, metaData, arrow }) {
  return (
    <>
      <Wrapper bg={backgroundVideo ? null : backgroundImg}>
        <VideoWrapper>
          <img
            src="/images/Nuclear-Medicine-first-section.png"
            alt="background"
          />
        </VideoWrapper>

        <ContentTopInner>
          <h1 className="headings">{metaData.Title}</h1>
          <div className="hero-text">{metaData.Description}</div>
        </ContentTopInner>

        <div>
          <ContentMid className={arrow ? "" : "buttons"}>
            {metaData.buttons &&
              metaData.buttons.map((button) => {
                return (
                  <div key={button.id}>
                    <Link
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                      href={button.url}
                    >
                      <button className="left" style={{ cursor: "pointer" }}>
                        {button.name}
                      </button>
                    </Link>
                  </div>
                );
              })}
          </ContentMid>
        </div>
      </Wrapper>
    </>
  );
}

export default Extravasations;
