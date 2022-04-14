import { createGlobalStyle } from "styled-components";

const grass = require("../assets/photos/grass.png");

const GlobalStyle = createGlobalStyle`
html {
    background-image: url(${grass});
    background-position: 0 70vh;
    background-size: 30vw 30vh;
    background-repeat: repeat-x;
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
