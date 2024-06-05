import React from "react";
import {
  Wrapper,
  ContentTopInner,
  ContentMid,
  VideoWrapper,
  TopTwoBtn,
} from "./section.style";

function Section({
  title,
  desc,
  backgroundImg,
  backgroundVideo,
  link,
  leftbtn,
  rightbtn,
  centerbtn,
  Statsbtn,
  rightTopbtn,
  leftTopbtn,
  arrow,
}) {
  return (
    <Wrapper bg={backgroundVideo ? null : backgroundImg}>
      {backgroundVideo && (
        <VideoWrapper>
          <video autoPlay muted loop>
            <source src={`${backgroundVideo}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </VideoWrapper>
      )}

      <ContentTopInner>
        <h1 className="headings">{title}</h1>
        <div className="hero-text">
          {desc} <a href="/">{link}</a>
        </div>
      </ContentTopInner>
      <TopTwoBtn>
        {rightTopbtn && (
          <div>
            <button className="rightTopbtn">{rightTopbtn}</button>
          </div>
        )}
        {leftTopbtn && (
          <div>
            <button className="leftTopbtn">{leftTopbtn}</button>
          </div>
        )}
      </TopTwoBtn>
      <div>
        <ContentMid className={arrow ? "" : "buttons"}>
          {leftbtn && (
            <div className="left">
              <button>{leftbtn}</button>
            </div>
          )}

          {Statsbtn && (
            <div className="Statsbtn">
              <button>{Statsbtn}</button>
            </div>
          )}
          {Statsbtn && (
            <div className="Statsbtn">
              <button>{Statsbtn}</button>
            </div>
          )}
          {Statsbtn && (
            <div className="Statsbtn">
              <button>{Statsbtn}</button>
            </div>
          )}

          {centerbtn && (
            <div className="center">
              <button style={{ fontFamily: "Gotham" }}>{centerbtn}</button>
            </div>
          )}
          {rightbtn && (
            <div className="right">
              <button>{rightbtn}</button>
            </div>
          )}
        </ContentMid>
      </div>
    </Wrapper>
  );
}

export default Section;
