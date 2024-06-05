import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;

  img {
    // margin-top: 15px;
    margin-bottom: 10px;
    height: 50px;
    background-size: 100% 100%;
    // animation: animate infinite 1.8s;
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
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  padding-top: 25vh;
  // height: 100%;
  width: 100%;
  h1 {
    font-weight: 400;
    letter-spacing: 0.5px;
    font-size: 3.5rem;

    color: #fff;
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
    width: 90%;
    top: 18vh;
    .hero-text {
      font-size: 15px;
      color: #fff;
      font-weight: 700;
      // text-shadow: 5px 5px 4px #000;
      transition: transform 0.5s;
    }
    h1 {
      font-size: 2rem !important;
    }
  }
`;

export const ContentMid = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  left: 50%;
  // height: 37vh;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  animation: transform 1s;
  animation-timing-function: ease-in;
  align-items: center;
  justify-content: ;
  animation: transform 1s;
  animation-timing-function: ease-in;

  button {
    padding: 12px 20px;
    width: 400px;
    // border-radius: 10px;
    outline: none;
    border: none;
    // background-color: rgba(23, 26, 32, 1);
    color: white;
    margin: 5px;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.6px;
    opacity: 0.9;
    :hover {
      cursor: pointer;
    }
  }
  .Statsbtn button {
    // background-color: rgb(133 133 133);
    color: white;
    height: 195px;
    width: 250px;
    font-size: 25px !important;
    font-weight: 700;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .left {
    background-color: rgba(23, 26, 32, 1);
    color: white;
    margin-right: 25px;
  }
  .center {
    // background-color: #3e6ae1;
    color: white;
    margin-right: 25px;
  }

  .right button {
    // background-color: rgba(23, 26, 32, 1);
    color: white;
    margin-right: 25px;
  }

  @media screen and (max-width: 600px) {
  bottom: 3rem;

    flex-direction: column;
    .left,
    .right,
    .center,
    .Statsbtn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .left {
      height: 40px;
      margin-right: 0;
      margin-bottom: 15px;
      width: 260px;
    }
    .center button {
      height: 40px;
      margin-right: 0;
      margin-bottom: 15px;
      width: 260px;
    }

    .right button {
      height: 40px;
      margin-right: 0;
      height: 40px;
      width: 260px;
    }
    .Statsbtn button {
      height: 40px;
      margin-right: 0;
      margin-bottom: 15px;
      width: 260px;
    }
    button {
      width: 90%;
      padding: 5px 10px;
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
`;

export const VideoWrapper = styled.div`
  // position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
    // background: red;
  }
`;
