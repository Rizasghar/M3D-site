import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center;
  backgroun-color: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  justify-content: space-between;

  img {
    // margin-top: 15px;
    margin-bottom: 10px;
    height: 50px;
    // animation: animate infinite 1.8s;
  }
  .arrow {
    display: flex;
    justify-content: center;
  }

  // .buttons {
  //   margin-bottom: 60px;
  // }

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
    
    .buttons {
      margin-bottom: 400px;
    }
    img {
      height: 40px;
    }
  }
`;

export const ContentMid = styled.div`
position: absolute;
bottom:0px;
width: 91%;
left: 50%;
margin-top: 10px;
height: 155px;
transform: translateX(-50%);
display: flex;
justify-content: center;
z-index: 1;
display: flex;
// flex-direction: column;
justify-content: space-between;
flex-wrap: wrap;
animation: transform 1s;
animation-timing-function: ease-in;
align-items: center;
justify-content: ;
animation: transform 1s;
animation-timing-function: ease-in;


.rotate-animation {
  transition: opacity 0.2s ease-in-out;
  opacity: 1; /* Initially set opacity to 1 */
}

.rotate-animation.fade-out {
  opacity: 0; /* Set opacity to 0 to fade out */
}

.main-child{
  // border: 1px solid #000;
  // width: 22%;
  // height: 50px;
  // border:1px solid red;
  display: flex;
  flex-direction: column;
}

.headings {
  font-weight: 400;
  letter-spacing: 0.5px;
  font-size: 3.3rem;
}
.headings2 {
  font-weight: 400;
  letter-spacing: 0.5px;
  font-size: 2rem;
}
  button {
    padding: 12px 20px;
    width: 350px;
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
 
  .left button {
    background-color: rgba(23, 26, 32, 1);
    color: white;
    margin-right: 25px;
  }
  .center button {
    background-color: #3e6ae1;
    color: white;
    margin-right: 25px;
  }

  .right button {
    background-color: rgba(23, 26, 32, 1);
    color: white;
    margin-right: 25px;
  }
  .main-child2{
    margin-top: -15rem;

  }

  @media screen and (max-width: 600px) {
bottom:7rem;


    .main-child{
      display: flex;
    flex-direction: column;
    margin-top: 78px;
    margin-left: 1rem;
    width: 100%;
    justify-content: space-between;
    height: 70vh;
    }

    .main-child2{
      visibility: hidden;
    }
  
    .learnmore{
      // border: 2px solid red;
      display: flex;
      justify-content: center;
    }

    display: flex;
    flex-direction: row;
    height: 37vh;
    .left,
    .right,
    .center,
    .Statsbtn {
      display: flex;
      justify-content: center;
    }
    .left button {
      height: 40px;
      width: 260px;
      margin-right: 0;
      margin-bottom: 15px;
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
      height: 150px;
    width: 200px;
      margin-right: 0;
      margin-bottom: 15px;
      font-size: 20px !important;
    }
    button {
      width: 90%;
      padding: 5px 10px;
    }
  }

  animation: transform 1s;
  animation-timing-function: ease-in;
  .headings {
    visibility: hidden;
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

  .imggg {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    margin-top: 55px;
    // background: red;
    background-image: url("/images/m3d-cart-animation-loop.gif");
  }

  @media only screen and (max-width: 768px) {
    .imggg {
      background-image: url("/images/m3d-cart-animation-mobile-loop.gif");
      background-size: 100% 100%;
    }
  }
`;
