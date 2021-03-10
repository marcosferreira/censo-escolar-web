import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  a {
    width: 150px;
    height: 150px;
    margin-top: 100px;
    padding: 20px;
    background-color: #2c5fb0;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
