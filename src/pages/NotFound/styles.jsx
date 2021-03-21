import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  a {
    min-width: 150px;
    min-height: 60px;
    padding: 20px;
    background-color: #2c5fb0;
    color: #fff;
    text-decoration: none;
    text-align: center;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  button {
    min-width: 150px;
    min-height: 60px;
    padding: 20px;
    background-color: #2c5fb0;
    color: #fff;
    text-decoration: none;
    text-align: center;
    font-size: 16px;
    border-radius: 4px;
    border:none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }


  @media(max-width: 320px) {
    gap: 10px;
  }

  @media(min-width: 1024px) {
    gap: 50px;
  }
`;
