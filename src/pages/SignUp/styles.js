import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #f2f2f2;
  color: #2957a3;

  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;

  button {
    color: #fff;
  }

  a {
    min-width: 150px;
    margin-top: 10px;
    padding: 12px 15px;
    border: none;
    color: #444;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    font-size: 14px;
    transition: 0.4s ease all;

    &:hover {
      cursor: pointer;
      box-shadow: 0px 1px 4px #888;
    }
    &:active {
      box-shadow: 0px 1px 8px #888;
    }
  }
`;
