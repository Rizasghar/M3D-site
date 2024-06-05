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
    height: 80vh;
    img {
      height: 40px;
    }
  }
  @media screen and (min-width: 600px) and (max-width: 900px) {
    height: 80vh;
  }
`;

export const ContentTopInner = styled.div`
  text-align: center;
  position: absolute;
  // top: 40%;
  left: 33%;
  transform: translate(-50%, -50%);
  z-index: 1;
  padding-top: 21vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  h1 {
    font-weight: 400;
    letter-spacing: 0.5px;
    font-size: 3.5rem;

    color: #fff;
  }

  .imagess {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .innerimg {
    max-width: 90%;
    height: auto;
    border: 2px solid black;
    opacity: 0.8;
  }

  p {
    font-size: 0.9rem;
    padding: 5px;
    color: #fff;
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
  .hero-text {
    font-size: 25px;
    color: #fff;
    font-weight: 700;
    // text-shadow: 5px 5px 4px #000;
    transition: transform 0.5s;
  }

  .hero-text:hover {
    transform: translate(0%, -20%);
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
    width: 100%;
    left: 50%;
    padding-top: 11vh;

    .innerimg {
      width: 57%;
    }
    h1 {
      font-size: 2rem !important;
      margin-top: -2rem;
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    left: 50%;
    padding-top: 11vh;

    .innerimg {
      width: 57%;
    }
    h1 {
      font-size: 2rem !important;
    }
  }
`;

export const VideoWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .main-image-RS3 {
    width: 100%;
    height: 100%;
    background-size: cover;
    // background-size: 100% 100%;

    background-image: url("/images/Connect-Any-Device-Desktop.png");
  }
  @media screen and (max-width: 600px) {
    .main-image-RS3 {
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      background-image: url("/images/Connect-Any-Device-Mobile.png");
    }
  }
`;
