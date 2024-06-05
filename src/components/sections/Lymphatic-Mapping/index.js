import React from "react";
import {
  Wrapper,
  ContentTopInner,
  ContentMid,
  VideoWrapper,
  TopTwoBtn,
} from "./section.style";

function LymphaticMapping({ link, arrow }) {
  return (
    <>
      <Wrapper>
        <VideoWrapper>
          <video autoPlay muted loop>
            <source src="/images/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </VideoWrapper>
        <ContentTopInner>
          <h1 className="headings">Title LymphaticMapping</h1>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "700",
              textShadow: "5px 5px 4px #000",
            }}
          >
            description <a href="/">{link}</a>
          </p>
        </ContentTopInner>
        <TopTwoBtn>
          <div>
            <button className="rightTopbtn"></button>
          </div>

          <div>
            <button className="leftTopbtn"></button>
          </div>
        </TopTwoBtn>
        <div>
          <ContentMid className={arrow ? "" : "buttons"}>
            <div className="left">
              <button></button>
            </div>

            <div className="Statsbtn">
              <button>Statsbtn</button>
            </div>

            <div className="Statsbtn">
              <button>Statsbtn</button>
            </div>

            <div className="Statsbtn">
              <button>Statsbtn</button>
            </div>

            <div className="center">
              <button>centerbtn</button>
            </div>

            <div className="right">
              <button>rightbt</button>
            </div>
          </ContentMid>
        </div>
      </Wrapper>
    </>
  );
}

export default LymphaticMapping;
