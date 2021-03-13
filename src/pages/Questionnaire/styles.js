import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 50px 10px 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;

  text-align: center;

  h1, h2 {
    margin-bottom: 5px;
  }

  button {
    background-color: #89C12F;
    color: #fff;
  }
`;
