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
    font-family: 'Lato', sans-serif;

  }
  
  `;
export { Global };
