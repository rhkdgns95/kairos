import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }
  ul, li, p, a {
    list-style: inherit;
    padding: 0;
    margin: 0;
    text-decoration: inherit;
    color: inherit;
  }
`;
