import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) =>
    `url('/images/${props.bg}')`}; //url is by default in public section
  background-video: ${(props) =>
    props.video
      ? `url('/images/${props.video}')`
      : "none"}; // Assuming your video files are in the videos folder

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;

  img {
    margin-top: 15px;
    margin-bottom: 10px;
    height: 50px;
    animation: animate infinite 1.8s;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  padding-top: 11vh;
  width: 90%;
  animation: transform 1s;
  animation-timing-function: ease-in;
  .hero-text {
    // font-size: 25px;
    color: #fff;
    max-width: 60%;
    padding-left: 20px;
    font-weight: 700;
    // text-shadow: 5px 5px 4px #000;
    transition: transform 0.5s;
    // display: flex;
    text-align: left;
    // justify-content: flex-start;
    font-size: 25px;
  }
  h1 {
    font-weight: 400;
    letter-spacing: 0.5px;
    font-size: 25px;

    color: #fff;
  }
  p {
    font-size: 0.9rem;
    padding: 5px;
    color: #fff;
  }
  .videotagsss {
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }

  @media screen and (max-width: 1100px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 600px) {
    .hero-text {
      max-width: 100%;
      font-size: 14px;
    }
    .videotagsss {
      height: 50%;
      width: 100%;
      border-radius: 10px;
    }
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
    width: 90%;
    top: 58vh;
    h1 {
      font-size: 14px !important;
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

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
    // background: red;
  }
`;
