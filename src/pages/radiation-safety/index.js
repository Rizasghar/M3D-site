import React, { useState, useEffect, useRef } from "react";
import { Wrapper, HeaderWrapper } from "../../styles/home.style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Chatbot from "../../components/chatbot/Chatbot";
import Connectanydevice from "../../components/sections/Connect-any-device";
import Spectrum from "../../components/sections/Spectrum";
import YourTimeMatters from "../../components/sections/Your-time-matters";
import GammaEyespecs from "../../components/sections/Gamma-Eye-specs";
import GammaEyeSpecsFive from "../../components/sections/Gamma-Eye-specs-five";
import Head from "next/head";
import { API_BASE_URL } from "../../utils/API.Config";
import axios from "axios";

const radiationsafety = () => {
  const [navbarColor, setNavbarColor] = useState("rgba(74, 74, 74, 0.9)");
  const contentRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [metaData, setMetaData] = useState([]);

  useEffect(() => {
    const fetchProductDetail = async () => {
      if (!metaData || loading) {
        try {
          await getProductDetail();
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProductDetail();
  }, [loading, metaData]);

  const getProductDetail = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}products`);
      if (response?.data?.data?.length > 0) {
        const product = response.data.data.find(
          (item) => item.attributes.Product_ID === "1"
        );
        if (product) {
          const sortedMetaData = product.attributes.meta_data.sort(
            (a, b) => a.id - b.id
          );
          setMetaData(sortedMetaData);
        }
      } else {
        console.log("No data found in the API response");
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  return (
    <>
      <Head>
        <title>M3D Website | Radiation Safety</title>
      </Head>
      <Header navbarColor={navbarColor} />
      <Wrapper ref={contentRef}>
        <HeaderWrapper style={{ backgroundColor: navbarColor }}>
          {metaData.length > 0 && (
            <>
              {metaData.map((item) => {
                switch (item.id) {
                  case 1:
                    return <GammaEyespecs metaData={item} key={item.id} />;
                  case 2:
                    return <YourTimeMatters metaData={item} key={item.id} />;
                  case 3:
                    return <Connectanydevice metaData={item} key={item.id} />;
                  case 4:
                    return <Spectrum metaData={item} key={item.id} />;
                  case 5:
                    return <GammaEyeSpecsFive metaData={item} key={item.id} />;
                  default:
                    return <GammaEyespecs metaData={item} key={item.id} />;
                }
              })}
            </>
          )}
          <Footer />
        </HeaderWrapper>
      </Wrapper>
      <Chatbot />
    </>
  );
};

export default radiationsafety;
