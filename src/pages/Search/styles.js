import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;

  h1 {
    margin-top: 80px;
  }

  form {
    width: 100%;
    max-width: 600px;

    fieldset {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: none;
      position: relative;

      input {
        width: 100%;
        height: 60px;
        margin: 0 auto;
        padding: 20px;
        border: none;
        border-radius: 4px;
        background-color: #224A8A;
        color: #FFF;
        font-size: 14px;

        &::placeholder {
          color: #3C81F0;
        }
      }

      button {
        position: absolute;
        right: 0;

        padding: 16px;
        background-color: transparent;
        border: none;
        color: #3C81F0;

        &:hover {
          cursor: pointer;
          color: #FFF;
        }
      }
    }
  }
`;

export const CardPerson = styled.div`
  width: 100%;
  max-width: 600px;
  height: 200px;
  background-color: #224A8A;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;

  display: ${props => props.visibility};
`;
