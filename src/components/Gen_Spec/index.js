import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Interior from "../Interior_Specs/index";

import { Wrapper, Content } from "./spec.style";

const Specs = ({
  interiorMainHeading,
  interiorFirstHeading,
  interiorFirstDes,
  interiorSecondHeading,
  interiorSecondDes,
  interiorThirdHeading,
  interiorThirdDes,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1400 });
    AOS.refresh();
  }, []);

  return (
    <>
      <Wrapper>
        <Content>
          <Interior interiorMainHeading={interiorMainHeading} />
          <div id="setalignment" className="row">
            <div className="col" data-aos="fade-right">
              <img src="/images/game.jpg" alt="game" />
            </div>
            <div className="col text" data-aos="fade-left">
              <h3>{interiorFirstHeading}</h3>
              <p>{interiorFirstDes}</p>
            </div>
          </div>
          <div id="setalignment" className="row">
            <div className="col text1" data-aos="fade-right">
              <h3>{interiorSecondHeading}</h3>
              <p>{interiorSecondDes}</p>
            </div>
            <div className="col" data-aos="fade-left">
              <img src="/images/connected.jpg" alt="connected" />
            </div>
          </div>
          <div id="setalignment" className="row">
            <div className="col" data-aos="fade-right">
              <img src="/images/audio.jpg" />
            </div>
            <div className="col text" data-aos="fade-left">
              <h3>{interiorThirdHeading}</h3>
              <p>{interiorThirdDes}</p>
            </div>
          </div>
        </Content>
      </Wrapper>
    </>
  );
};

export default Specs;
