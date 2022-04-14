import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    background-image: url("https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/63893/grass-clipart-md.png");
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
