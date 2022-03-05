import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body{
        margin: 0; 
        padding: 0;
        height: 100%;
        box-sizing: border-box;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #000000;
        color: #333333;
        font-size: 16px;
    }
`;