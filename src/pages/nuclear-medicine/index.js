import React, { useState, useEffect, useRef } from "react";
import { Wrapper, HeaderWrapper } from "../../styles/home.style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Chatbot from "../../components/chatbot/Chatbot";
import Extravasations from "../../components/sections/Extravasations";
import Measurethedelivereddose from "../../components/sections/Measure-the-delivered-dose";
import Head from 'next/head';
import axios from "axios";
import { API_BASE_URL } from "../../utils/API.Config";


const nuclearmedicine = () => {
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
          (item) => item.attributes.Product_ID === "3"
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
        <title>M3D Website | Nuclear Medicine</title>
      </Head>
      <Header navbarColor={navbarColor} />
      <Wrapper ref={contentRef}>
        <HeaderWrapper style={{ backgroundColor: navbarColor }}>

        {metaData.length > 0 && (
            <>
              {metaData.map((item) => {
                switch (item.id) {
                  case 1:
                    return <Extravasations metaData={item} key={item.id} />;
                  case 2:
                    return <Measurethedelivereddose metaData={item} key={item.id} />;
                  default:
                    return <Measurethedelivereddose metaData={item} key={item.id} />;
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

export default nuclearmedicine;
