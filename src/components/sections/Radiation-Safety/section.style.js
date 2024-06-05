import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;

  .arrow {
    display: flex;
    justify-content: center;
  }

  .buttons {
    margin-bottom: 60px;
  }


  @media screen and (max-width: 600px) {
    height: 100vh;
  }
`;

export const ContentTopInner = styled.div`
  text-align: center;
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Gotham !important;
  z-index: 1;
  font-size: 2.5rem;
  padding-top: 25vh;
  // height: 100%;
  width: 100%;
  h1{
    font-weight: 400;
    letter-spacing: 0.5px;
    font-size: 3.5rem;
    color: rgb(65, 65, 65);
  }
  // .headings.index-0 {
  //   font-weight: 400;
  //   letter-spacing: 0.5px;
  //   font-size: 3.5rem;
  //   color: #000;
  //   margin-left: 45rem;
  // }
  // .headings.index-1 {
  //   font-weight: 400;
  //   letter-spacing: 0.5px;
  //   font-size: 3.5rem;
  //   margin-left: 60%;
  //   margin-top: 21rem;
  //   white-space: pre-wrap;
  //   word-break: break-all;
  //   color: #000;
  // }
  // .headings.index-2 {
  //   font-weight: 400;
  //   letter-spacing: 0.5px;
  //   font-size: 3.5rem;
  //   margin-left: 9%;
  //   color: #000;
  // }
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
  // @media screen and (max-width: 600px) and (min-width: 495px){
  //   .headings.index-0 {
  //     font-size: 2.5rem !important;
  //     margin-top: 17rem !important;
  //     margin-left: -11rem;
  //     color: #000 !important;
  //   }
  // }

  // @media screen and (max-width: 400px){
  //   .headings.index-0 {
  //     font-size: 2.5rem !important;
  //     margin-top: 17rem !important;
  //     margin-left: -11rem;
  //     color: #000 !important;
  //   }
  //   .headings.index-1 {
  //     font-size: 2.5rem !important;
  //     margin-top: 1rem !important;
  //     margin-left: -1rem !important;
  //     white-space: normal;
  //     word-break: normal;
  //   }
  //   .headings.index-2 {
  //     font-size: 2.5rem !important;
  //     margin-top: 1rem !important;
  //     margin-left: -1rem !important;
  //   }

  // }
  @media screen and (max-width: 600px) {
    width: 100%;
    left: 50%;
    top: -1vh;
    font-size: 2.5rem;

    .headings.index-0 {
      font-size: 2.5rem !important;
      //   margin-top: 46rem;
      //   margin-left: -11rem;
      //   color: #000 !important;
    }
    .headings.index-1 {
      font-size: 2.5rem !important;
      //   margin-top: -3rem;
      //   margin-left: 9%;
      //   white-space: normal;
      //   word-break: normal;
    }
    .headings.index-2 {
      font-size: 2.5rem !important;
      //   margin-top: -3rem;
      //   margin-left: 9%;
    }
  }
  @media screen and (max-width: 1300px) and (min-width: 600px) {
    width: 100%;
    left: 50%;
    font-size: 1.5rem;
    top: 7vh;
    // .headings.index-0 {
    //   font-size: 2.5rem !important;
    //   margin-top: -3rem;
    //   margin-left: 14rem;
    //   color: #000 !important;
    // }
    // .headings.index-1 {
    //   font-size: 2.5rem !important;
    //   margin-top: 13rem;
    //   margin-left: 25rem;

    // }
    // .headings.index-2 {
    //   font-size: 2.5rem !important;
    //   margin-top: -3rem;
    //   margin-left: 15rem;
    // }
  }
`;

export const ContentMid = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  visibility: visible;
  z-index: 2;

  button {
    padding: 12px 20px;
    width: 260px;
    // border-radius: 10px;
    outline: none;
    border: none;
    background-color: rgba(23, 26, 32, 1);
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

  .center {
    background-color: #3e6ae1 !important;
    color: white;
    margin-right: 25px;
    // text-decoration: none !important;
  }

  @media screen and (max-width: 600px) {
    bottom: 6rem !important;

    flex-direction: column;
    .center,
    .Statsbtn {
      display: flex;
      // text-decoration: none !important;
      justify-content: center;
    }
    .left {
      height: 40px;
      margin-right: 0;
      margin-bottom: 5px;
      // border:2px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none !important;

      width: 210px;
    }
    .center {
      height: 40px;
      display: flex;
      // text-decoration: none !important;
      justify-content: center;
      align-items: center;
      margin-right: 0;
      margin-bottom: 15px;
      width: 210px;
    }

    .right button {
      // border:2px solid red;
      height: 40px;
      margin-right: 0;
      height: 40px;
      width: 210px;
    }
    .Statsbtn button {
      height: 40px;
      margin-right: 0;
      margin-bottom: 15px;
      width: 210px;
    }
    button {
      width: 90%;
      padding: 5px 10px;
    }
    width: 99%;
    // border: 2px solid red;
  }
`;

export const VideoWrapper = styled.div`
  .image-rotator {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin-top: -15px;
  }

  .image-rotator img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-size: cover;
    // object-fit: cover;
    left: 0;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .image-rotator img.active {
    opacity: 1;
  }
  @media screen and (max-width: 600px) {
    .image-rotator img {
      background-size: cover;
    }
    .image-rotator img.active {
      opacity: 1;
      background-size: cover;
    }
  }
`;
