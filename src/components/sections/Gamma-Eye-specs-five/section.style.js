import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 147vh;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #000 !important;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;

  .main-image-RS5 {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url("/images/Revin-Specs-Desktop.png");
  }

  img {
    margin-top: 15px;
    margin-bottom: 10px;
    height: 50px;
  }
  .arrow {
    display: flex;
    justify-content: center;
  }

  .buttons {
    margin-bottom: 60px;
  }

  @keyframes animate {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(5px);
    }
    60% {
      transform: translateY(3px);
    }
  }
  @media screen and (max-width: 700px) {
    height: 275vh;
    // top: 3rem;
    .main-image-RS5 {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-image: url("/images/Revin-Specs-Mobile.png");
    }
  }
  @media screen and (min-width: 1600px) and (max-width: 2150px) {
    height: 117vh;
  }
  @media screen and (max-width: 400px) {
    height: 271vh !important;
  }
  @media screen and (max-width: 377px) {
    height: 318vh !important;
  }
`;

export const ContentTopInner = styled.div`
  // text-align: center;
  position: absolute;
  top: 36%;
  left: 16%;
  transform: translate(-50%, -50%);
  z-index: 1;
  padding-top: 0vh;
  // height: 100%;
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .performance{
  width: 86% ;
  left: 29%;
  position: relative;
  }
  @media screen and (max-width: 700px) and (min-width: 600px) {
.image-dimensions{
height: 130vh !important;
}
  
  }
  @media screen and (min-width: 1600px) {
    .image-dimensions{
      width: 75%;
      height: 37vh  !important; ;
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
      margin-top: -15rem;
      margin-left: 13rem;
      // border: 1px solid red;
      flex-wrap: wrap;
    }
  }
  .image-main-specs{
    height: 250px;
    // border: 1px solid red;
  }
  .image1 {

    object-fit: contain;
    width: 250px;
    height: 250px;
  }

  .image2 {
    object-fit: contain;
    width: 250px;
    height: 250px;

  }
  .weight-dimensions{
    display: flex;
    width: 36%;
    flex-direction: column;
    justify-content: space-between;
  }
  .image-dimensions{
    width: 75%;
    height: 59vh;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-top: -15rem;
    margin-left: 13rem;
    // border: 1px solid red;
    flex-wrap: wrap;
  }

  h1 {

    font-weight: 400;
    letter-spacing: 0.5px;
    font-size: 3.5rem;

    color: #fff;
  }
  .gama-section-image{
    width: 24%;
    margin-left: -49%;
  }

  @media screen and (max-width: 400px)  {
    .image-dimensions {
      width: 100% !important;
      display: flex;
      top: 54rem !important;
      height: 124vh !important;
      position: absolute;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: space-evenly;
  }
  .image-main-specs {
  
  width: 100% !important;
  }
  .image1 {
    height: 200px;
    width: 200px;
    background-size: cover;
  }

  .image2 {
    height: 200px;
    width: 200px;
    background-size: cover;
  }

  }
  
  @media screen and (max-width: 600px) {
    top: 20%;
    .text-weight{
      margin-top: 6rem !important;
      color: rgb(255, 255, 255);
      position: relative;
    }
    .image-dimensions{
      width: 100% !important;
      display: flex;
      top:58rem;
      height: 90vh;
      position: absolute;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-wrap: inherit;
      margin-left: 0;

    }
    .image-main-specs {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 36%
   
    }
    .image1{
      // width: 80%;
    }
    .image2{
      // width: 80%;
    }
    .performance{
      width: 92% !important;
      left: 33%;
      top:6rem;
      position: relative;
      }
    .dimensions{
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 100% !important;
    }
    .gama-section-image{
      width: 89%;
      margin-left: 2%;
    }
    .weight-dimensions{
      display: flex;
      width: 100% ;
      flex-direction: column;
      justify-content: space-between;
    }
  }

    @media screen and (min-width: 600px) and (max-width: 950px) {
      .gama-section-image{
        width: 46%;
        margin-left: -12%;
      }
  '}


  p {
    font-size: 0.9rem;
    padding: 5px;
    color: #fff !important;
  }
  a {
    text-decoration: underline;
    text-underline-position: under;
    display: inline-block;
    color: #b5b5b5;
    transition: color 200ms ease-in;

    :hover {
      color: var(--teslaColor);
      text-decoration-thickness: 2px;
    }
  }
  .hero-text{
    font-size: 25px;
    color: #fff;
    font-weight: 700;
    // text-shadow: 5px 5px 4px #000;
    transition: transform 0.5s;
  }

  .hero-text:hover {
    transform: translate(0%,-20%);
    transition-durations: 0.5s;

  }

  animation: transform 1s;
  animation-timing-function: ease-in;
  @keyframes transform {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 600px) {
    width: 90%;
    top: 46vh;
    h1 {
      font-size: 2.5rem !important;
    

    }
  }
`;

export const Heading = styled.h2`
  color: "white";
`;

export const Row = styled.div`
  /* Add your row styles here */
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;

export const Column = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
  }
`;
