import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  body {
    background-color: #2957A3;
    color: #fafafa;
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
