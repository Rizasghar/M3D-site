import React, { useState, useRef } from "react";
import BlogHome from "../../components/blog/home/Home";
import Header from "../../components/Header";
import Chatbot from "../../components/chatbot/Chatbot";
import Footer from "../../components/Footer";
import Head from "next/head";

export default function Blog() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState("rgba(74, 74, 74, 0.9)");
  const contentRef = useRef(null);

  return (
    <>
      <Head>
        <title>M3D Website | Blog</title>
      </Head>
      <Header navbarColor={navbarColor} />
      <>
        <BlogHome style={{ marginTop: "60px" }} />
        <Footer />
      </>
      <Chatbot />
    </>
  );
}
