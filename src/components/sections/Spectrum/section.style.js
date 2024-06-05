import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;

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
  @media screen and (max-width: 600px) {
    img {
      height: 40px;
    }
  }
`;

export const ContentTopInner = styled.div`
  text-align: center;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  padding-top: 25vh;
  width: 67%;
  h1 {
    font-weight: 400;
    letter-spacing: 0.5px;
    font-size: 3.5rem;

    color: #fff;
  }
  .hero-text{
    font-size: 1.5rem;
    fontWeight: 700,
    // text-shadow: 5px 5px 4px #000,
    color:red;
  }
  p {
    font-size: 20PX;
    padding: 5px;
    color: red;
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
    top: 3rem;

    h1 {
      font-weight: 400;
      letter-spacing: 0.5px;
      font-size: 1.5rem;
      color: #fff;
    }
  }
  @media screen and (max-width: 1015px) {
    width: 90%;
    top: 3rem;

    h1 {
      font-weight: 400;
      letter-spacing: 0.5px;
      font-size: 1.5rem;
      color: #fff;
    }
  }
`;

export const VideoWrapper = styled.div`
  // position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .main-image-RS4 {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-image: url("/images/spectrum-desktop.jpeg");
  }
  @media screen and (max-width: 600px) {
    .main-image-RS4 {
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      background-image: url("/images/spectrum-mobile.jpeg");
    }
  }
`;