import { createGlobalStyle } from "styled-components";
import { BackgroundColor } from "./Theming";

const Global = createGlobalStyle`
* {
    margin: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  body {
    background-color:${BackgroundColor};   
    font-family: 'Fira Sans', sans-serif;

  }
  
  `;
export { Global };
