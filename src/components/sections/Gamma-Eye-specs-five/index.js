import React from "react";
import {
  Wrapper,
  ContentTopInner,
  Heading,
  Row,
  Column,
} from "./section.style";

const GammaEyeSpecs = (metaData) => {
  if (!metaData) return null;
  return (
    <Wrapper>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <div className="main-image-RS5"></div>
      </div>

      <ContentTopInner>
        <div className="performance">
          <Heading style={{ color: "#fff" }}>
            <img src="/images/RAVIN_CAM_logo-dark.png" alt="RAVIN-CAM" />
          </Heading>
          <Heading style={{ color: "#fff" }}>Performance</Heading>

          <Row>
            <Column>
              <p style={{ color: "#fff" }}>Radiation Detected</p>
              <p style={{ color: "#fff", fontWeight: "lighter !important" }}>
                {metaData.metaData.RadiationDetected}
              </p>
            </Column>
            <Column>
              <p style={{ color: "#fff" }}>Detector</p>
              <p style={{ color: "#fff", fontWeight: "lighter !important" }}>
                {metaData.metaData.Detector}
              </p>
            </Column>
            <Column>
              <p style={{ color: "#fff" }}>Energy Resolution</p>
              <p style={{ color: "#fff", fontWeight: "lighter !important" }}>
                {metaData.metaData.EnergyResolution}
              </p>
            </Column>
            <Column>
              <p style={{ color: "#fff" }}>Spectroscopy Range</p>
              <p style={{ color: "#fff", fontWeight: "lighter !important" }}>
                {metaData.metaData.SpectroscopyRange}
              </p>
            </Column>
            <Column>
              <p style={{ color: "#fff" }}>Optical field of view</p>
              <p style={{ color: "#fff" }}>
                {metaData.metaData.Opticafieldofview}
              </p>
            </Column>
          </Row>

          <Row>
            <Column>
              <p style={{ color: "#fff" }}>
                Radiation field of view<br></br>(coded aperture)
              </p>
              <p style={{ color: "#fff", fontWeight: "lighter !important" }}>
                {metaData.metaData.Radiationfieldofviewcoded}
              </p>
            </Column>
            <Column>
              <p style={{ color: "#fff" }}>
                Radiation field of view<br></br>(Comption imaging)
              </p>
              <p style={{ color: "#fff", fontWeight: "lighter !important" }}>
                {metaData.metaData.RadiationfieldofviewCompton}
              </p>
            </Column>
            <Column>
              <p style={{ color: "#fff" }}>Power</p>
              <p style={{ color: "#fff", fontWeight: "lighter !important" }}>
                {metaData.metaData.Power}
              </p>
            </Column>
            <Column>
              <p style={{ color: "#fff" }}>Ports</p>
              <p style={{ color: "#fff", fontWeight: "lighter !important" }}>
                {metaData.metaData.Ports}
              </p>
            </Column>
            <Column>
              <p style={{ color: "#fff" }}>Connection</p>
              <p style={{ color: "#fff" }}>{metaData.metaData.Connection}</p>
            </Column>

            <Column>
              <p style={{ color: "#fff" }}>Battery Life</p>
              <p style={{ color: "#fff" }}>{metaData.metaData.BatteryLife}</p>
            </Column>
          </Row>
        </div>
        <div
          className="weight-dimensions"
          style={{
            width: "95%",
            position: "relative",
            height: "49vh",
            display: "flex",
            justifyContent: "space-between",
            left: "33%",
          }}
        >
          <div>
            <div
              className="text-weight"
              style={{
                padding: "1rem",
              }}
            >
              <Heading style={{ color: "#fff" }}>Weight and Dimensions</Heading>
              <Row>
                <div>
                  <Column>
                    <p style={{ color: "#fff" }}>Weight</p>
                    <p style={{ color: "#fff" }}>{metaData.metaData.Weight}</p>
                  </Column>
                  <div>
                    <p style={{ color: "#fff" }}>Dimensions</p>
                    <p style={{ color: "#fff" }}>
                      {metaData.metaData.Dimensions}
                    </p>
                  </div>
                </div>
              </Row>
            </div>
            <div
              style={{
                padding: "1rem",
                marginTop: "1rem",
              }}
            >
              <Heading style={{ color: "#fff" }}>Accessories</Heading>
              <p style={{ color: "#fff" }}>
                {metaData.metaData.AccessoriesOne}
              </p>
              <p style={{ color: "#fff" }}>
                {metaData.metaData.AccessoriesTwo}
              </p>
              <p style={{ color: "#fff" }}>
                {metaData.metaData.AccessoriesThree}
              </p>
            </div>
            <div className="image-dimensions">
              <div className="image-main-specs">
                <img
                  className="image1"
                  src="/images/Ravin-spec-image1.jpg"
                  alt="RAVIN-CAM"
                  width="242"
                  height="363"
                />
              </div>
              <div className="image-main-specs">
                <img
                  className="image2"
                  src="/images/Ravin-spec-image2.jpg"
                  alt="RAVIN-CAM"
                  width="242"
                  height="363"
                />
              </div>
              <div className="image-main-specs">
                <img
                  className="image1"
                  src="/images/Ravin-spec-image3.jpg"
                  alt="RAVIN-CAM"
                  width="242"
                  height="363"
                />
              </div>
              <div className="image-main-specs">
                <img
                  className="image2"
                  src="/images/Ravin-spec-image4.jpg"
                  alt="RAVIN-CAM"
                  width="242"
                  height="363"
                />
              </div>
            </div>
          </div>
        </div>
      </ContentTopInner>
    </Wrapper>
  );
};

export default GammaEyeSpecs;
