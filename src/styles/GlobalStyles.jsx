import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    transition: 0.4s all;
  }

  body {
    background-color: #2957A3;
    color: #fafafa;
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 2px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;

  a {
    width: 150px;
    height: 150px;
    padding: 20px;
    background-color: #2c5fb0;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media(max-width: 320px) {
    gap: 10px;
  }

  @media(min-width: 1024px) {
    gap: 50px;
  }
`;
