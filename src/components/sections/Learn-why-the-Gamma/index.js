import React, { useEffect, useState } from "react";
import { Wrapper, ContentTopInner, VideoWrapper } from "./section.style";
import axios from "axios";
import { API_BASE_URL } from "../../../utils/API.Config";

function LearnwhytheGamma({}) {
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState({
    attributes: {
      title: "",
      Description: "",
      freetrailbtn: "",
      orderbtn: "",
    },
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!productDetails.attributes.Title) {
          const response = await axios.get(`${API_BASE_URL}radiation-safeties`);
          setProductDetails(response.data.data[1]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Wrapper>
        <VideoWrapper>
          <video autoPlay muted loop>
            <source src="/images/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </VideoWrapper>
        <ContentTopInner>
          <div className="hero-text">
            {productDetails.attributes.Description}
          </div>

          <div style={{ height: "72vh", width: "100%" }}>
            <video className="videotagsss" autoPlay muted loop>
              <source src="/images/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </ContentTopInner>
      </Wrapper>
    </>
  );
}

export default LearnwhytheGamma;
