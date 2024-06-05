import React, { useState, useEffect, useRef } from "react";
import { Wrapper, Content, HeaderWrapper } from "../styles/home.style";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chatbot from "../components/chatbot/Chatbot";
import RadiationSafety from "../components/sections/Radiation-Safety/index";
import SurgicalImaging from "../components/sections/Surgical-Imaging/index";
import NuclearMedicine from "../components/sections/Nuclear-Medicine/index";
import Head from "next/head";
import axios from "axios";
import { API_BASE_URL } from "../utils/API.Config";

const Home = () => {
  const [navbarColor, setNavbarColor] = useState("rgba(74, 74, 74, 0.9)");
  const [loading, setLoading] = useState(true);
  const [homePageData, setHomePageData] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!homePageData || loading) {
        try {
          await getHomePageData();
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  const getHomePageData = async () => {
    const response = await axios.get(`${API_BASE_URL}products`);
    if (response?.data?.data?.length > 0) {
      const sortedData = response.data.data.sort((a, b) => {
        return parseInt(a.attributes.order) - parseInt(b.attributes.order);
      });
      setHomePageData(sortedData);
    }
  };

  return (
    <>
      <Head>
        <title>M3D Website</title>
      </Head>
      <Header navbarColor={navbarColor} headerLinks={homePageData ?? []} />
      <Wrapper ref={contentRef}>
        <HeaderWrapper>
          {homePageData &&
            homePageData.length > 0 &&
            homePageData.map((data) => {
              switch (data.attributes.order) {
                case 1:
                  return (
                    <Content key={data.id}>
                      <RadiationSafety data={data.attributes} />
                    </Content>
                  );
                case 2:
                  return (
                    <Content key={data.id}>
                      <SurgicalImaging data={data.attributes} />
                    </Content>
                  );
                case 3:
                  return (
                    <Content key={data.id}>
                      <NuclearMedicine data={data.attributes} />
                      <Footer />
                    </Content>
                  );
                default:
                  return (
                    <Content key={data.id}>
                      <RadiationSafety data={data.attributes} />
                    </Content>
                  );
              }
            })}
        </HeaderWrapper>
      </Wrapper>
      <Chatbot />
    </>
  );
};

export default Home;
