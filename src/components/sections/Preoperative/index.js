import React from "react";
import { Wrapper, ContentMid, VideoWrapper } from "./section.style";
import Link from "next/link";

function Preoperative({ backgroundImg, backgroundVideo, metaData, arrow }) {
  if (!metaData) return null;

  return (
    <div>
      <Wrapper bg={backgroundVideo ? null : backgroundImg}>
        <VideoWrapper>
          <div className="imggg"></div>
        </VideoWrapper>
        <div>
          <ContentMid className={arrow ? "" : "buttons"}>
            <div className="main-child">
              <div className="headings">{metaData.Title}</div>
              <Link
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "-2rem",
                }}
                className="learnmore"
                href={metaData.url}
              >
                <img src="/images/Lympho_Cam.png" alt="ravincam" />
                <button
                  style={{
                    cursor: "pointer",
                    fontFamily: "Gotham",
                    textDecoration: "none",
                  }}
                >
                  {metaData?.button}
                </button>
              </Link>
            </div>
          </ContentMid>
        </div>
      </Wrapper>
    </div>
  );
}

export default Preoperative;
