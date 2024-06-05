import React, { useEffect, useState } from "react";
import {
  Wrapper,
  ContentTopInner,
  ContentMid,
  VideoWrapper,
  StatsMain,
} from "./section.style";
import Header from "../../../components/Header/index";
import axios from "axios";
import { API_BASE_URL } from "../../../utils/API.Config";
import Link from "next/link";

function Preoperative({ backgroundImg, backgroundVideo, link, arrow }) {
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState({
    attributes: {
      title: "",
      Description: "",
      statsone: "",
      statstwo: "",
      statsthree: "",
      LearnMorebtn: "",
    },
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!productDetails.attributes.Title) {
          const response = await axios.get(
            `${API_BASE_URL}nuclearmedicinepagefirstsections`
          );
          setProductDetails(response.data.data[0]);
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
      <Header />
      <Wrapper bg={backgroundVideo ? null : backgroundImg}>
        <VideoWrapper>
          <video autoPlay muted loop>
            <source src="/images/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </VideoWrapper>

        <ContentTopInner>
          <h1 className="headings">{productDetails.attributes.Title}</h1>
          <div className="hero-text">
            {productDetails.attributes.Description}
          </div>
        </ContentTopInner>

        <div>
          <ContentMid className={arrow ? "" : "buttons"}>
            <div className="left">
              <Link href="/contact-us">
                <button style={{ fontFamily: "Gotham", cursor: "pointer" }}>
                  {productDetails.attributes.Learn_More_Btn}
                </button>
              </Link>
            </div>

            <StatsMain>
              <div className="Statsbtn">
                <button>{productDetails.attributes.Stats_One}</button>
              </div>

              <div className="Statsbtn">
                <button>{productDetails.attributes.Stats_Two}</button>
              </div>

              <div className="Statsbtn">
                <button>{productDetails.attributes.Stats_Three}</button>
              </div>
            </StatsMain>
          </ContentMid>
        </div>
      </Wrapper>
    </>
  );
}

export default Preoperative;
