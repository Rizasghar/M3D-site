import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Interior = ({ interiorMainHeading }) => {
  useEffect(() => {
    AOS.init({ duration: 1400 });
  }, []);

  return (
    <>
      <div className="title">
        <h1
          style={{
            color: "#fff",

            marginBottom: "27%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          data-aos="fade-up"
        >
          {interiorMainHeading}
        </h1>
      </div>
    </>
  );
};

export default Interior;
