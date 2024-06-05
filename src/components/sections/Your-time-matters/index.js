import React from "react";
import { Wrapper, ContentTopInner, VideoWrapper } from "./section.style";

function YourTimeMatters({ metaData }) {
  if (!metaData) return null;
  return (
    <>
      <Wrapper>
        <VideoWrapper>
          <div className="main-image-RS2"></div>
        </VideoWrapper>

        <ContentTopInner>
          <h1 className="headings">{metaData?.Title}</h1>
        </ContentTopInner>
      </Wrapper>
    </>
  );
}

export default YourTimeMatters;
