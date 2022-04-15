import { createGlobalStyle } from "styled-components";

import { grass, cloud } from "../assets/images/index";

const GlobalStyle = createGlobalStyle`
html {
    background-image: url(${grass}), url(${cloud});
    background-position: 0 70vh, 0 0vh;
    background-size: 30vw 30vh, 100vw 60vh;
    background-repeat: repeat-x, no-repeat;
    background-color: #EDFEAD;
    
    margin: 0;
    padding: 0;
    min-height: 100vh;
    
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    user-select: none;
    
    ::-webkit-scrollbar {
        display: none;
    }
}
img {
    -webkit-user-drag: none;
}`;

export default GlobalStyle;
