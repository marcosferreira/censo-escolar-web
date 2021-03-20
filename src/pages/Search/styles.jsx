import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  margin-top: ${props => props.visibility};

  h1 {
    margin-top: 80px;
    margin-bottom: 50px;
    transition: 0.4s all;
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
        text-transform: uppercase;

        &::placeholder {
          color: #3C81F0;
          text-transform: capitalize;
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

export const PanelResult = styled.div`
  width: 100%;
  max-width: 600px;
  transition: 0.4s all;
  display: ${props => props.visibility};
`;

export const CardPerson = styled.div`
  width: 100%;
  max-width: 600px;
  height: 150px;
  margin: 20px 0;
  padding: 20px;
  border-radius: 4px;
  background-color: #224A8A;

  display: flex;
  gap: 20px;
`;

export const CardBody = styled.div`
  padding: 10px;

  p {
    margin-bottom: 5px;
  }
`;
