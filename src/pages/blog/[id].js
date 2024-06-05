import React, { useState, useRef } from "react";
import BlogPreviewPage from "../../components/blog/blogpreview/BlogPreviewPage";
import { Wrapper } from "../../styles/home.style";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Chatbot from "../../components/chatbot/Chatbot";
import Head from "next/head";

const BlogPost = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState("rgba(74, 74, 74, 0.9)");
  const contentRef = useRef(null);
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>M3D Website | Blog Details</title>
      </Head>
      <Header navbarColor={navbarColor} />
      <Wrapper ref={contentRef}>
        <BlogPreviewPage id={id} />
        <Footer />
      </Wrapper>
      <Chatbot />
    </>
  );
};

export default BlogPost;
