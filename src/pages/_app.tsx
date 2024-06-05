// _app.js

import type { AppProps } from "next/app";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../styles/index.css";


export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: false,
      easing: 'ease-in-out', 
    });

    // Handle scroll events
    const handleScroll = () => {
      const position = window.scrollY;
      const navbar = document.querySelector('header');

      if (navbar) {
        if (position > 0) {
            navbar.style.backgroundColor = 'rgba(74, 74, 74, 0.9)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        }
    }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <Component {...pageProps} />;
}
