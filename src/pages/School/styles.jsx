import styled from "styled-components";

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
