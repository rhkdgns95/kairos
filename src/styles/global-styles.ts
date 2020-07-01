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

  ::-webkit-scrollbar {
    width: 5px;
  }
  /* Track - ScrollBar-Track */
  ::-webkit-scrollbar-track {
    background: #e6e6e6;
    border-radius: 10px;
  }

  /* Handle - ScrollBar-Circle */
  ::-webkit-scrollbar-thumb {
    background: #9ea7af;
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer !important;
    &:hover {
      background: #868b90;
    }
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:active {
    background: #65717b;
    cursor: pointer;
  }
`;
