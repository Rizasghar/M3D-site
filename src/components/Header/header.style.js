import styled from 'styled-components'

export const Wrapper = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    min-height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    z-index: 1;
    .close{
        color: black;
        padding: 5px;
        padding-bottom: 2px;
        border-radius: 50%;
        position: fixed;
        top: 15px;
        right: 20px;
        z-index: 5;
        transition: all 300ms ease-in;
        cursor: pointer;
        :hover{
            background-color: rgba(90, 90, 90, 0.1);
        }
    }
    .top{
        position: fixed;
        top: 0;
        right: 10px;
        z-index: 10;
        height: 75px;
        width: 270px;
        background-color: white;
        -webkit-animation: cssAnimation 400ms forwards; 
        animation: cssAnimation 400ms forwards;
    }
    @keyframes cssAnimation {
        0%   {opacity: 0;}
        99%  {opacity: 0;}
        100% {opacity: 1;}
    }
    @media screen and (max-width: 1150px){
        .close{
            background-color: lightgrey;
        }
    }

    .logo{
        position: absolute;
        top: 10px;
        left: 30px;
        cursor: pointer;
    }
    img{
        width: 80px;
    }

    @media screen and (max-width: 1150px){
        .logo{
            left: 30px;
        }
    }
    @media screen and (max-width: 400px){
        .logo{
            left: 10px;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: nowrap;

    .headings{


    }

    a{
        padding: 7px 16px;
        font-size: 0.92rem;
        letter-spacing: 0.6px;
        text-decoration: none;
        font-weight: 500;
        border-radius: 10px;
        transition: background-color 200ms ease-in;
        cursor: pointer;
        :hover{
            background-color: rgba(90, 90, 90, 0.1);
        }
    }
    
    @media screen and (max-width: 1150px){
        display: none;
    }
`;

export const Content1 = styled.div`
    display: flex;
    flex-wrap: nowrap;
    position: fixed;
    right: 30px;

    a{
        padding: 7px 16px;
        font-size: 0.92rem;
        letter-spacing: 0.6px;
        text-decoration: none;
        font-weight: 500;
        border-radius: 10px;
        transition: background-color 200ms ease-in;
        cursor: pointer;
        :hover{
            background-color: rgba(90, 90, 90, 0.1);
        }
    }

    @media screen and (max-width: 1150px){
        .none{
            display: none;
        }
        a{
            background-color: rgba(90, 90, 90, 0.08);
        }
        right: 20px;
    }
    @media screen and (max-width: 400px){
        right: 15px;
    }
`;

export const ToggleButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    outline: none;
    transition: background-color 0.3s ease;

    span {
        font-size: 14px;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

export const CloseIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: rgba(255, 255, 255, 0.7);
    }
`;