import styled from "styled-components";

// For section Scrolling Effect

export const Wrapper = styled.div`
scroll-snap-type: y mandatory;
overflow-y: scroll;
height: 100vh;
overflow-x: hidden;
/* Custom scrollbar styles */
scrollbar-width: thin;
scrollbar-color: #555 #909090;



    
`;

export const Content = styled.div`
    scroll-snap-align: start;
`;


export const HeaderWrapper = styled.div`
    transition: background-color 5s ease;
`;

