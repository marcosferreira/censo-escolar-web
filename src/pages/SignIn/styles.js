import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #f2f2f2;
  color: #2957A3;

  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: inherit;

    fieldset {
      width: 100%;
      background-color: inherit;
      border: none;
      position: relative;
    }
  }
`;

export const Input = styled.input`
  width: 300px;
  margin: 10px 0;
  padding: 15px;
  border: 1px solid #CCC;
  border-radius: 4px;
  background-color: inherit;
  font-size: 14px;

  display: block;
  position: relative;

  &:focus{
    border: 1px solid #999;
  }

  &:required:valid {
    outline: none;
    background-color: inherit;
    border: 1px solid #757575;
  }
`;

export const Label = styled.label`
  color: #BBB;
  font-size: 14px;
  font-weight: normal;
  z-index: 1;
  pointer-events: none;

  position: absolute;
  left: 16px;
  top: 25px;

  transition: 0.2s ease all;

  ${Input}:focus ~ & {
    color: #888;
  }

  ${Input}:required:valid ~ & {
    top:4px;
    font-size:12px;
    color:#000;
    background-color: inherit;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 12px 15px;
  border: none;
  background-color: #FFF;
  text-transform: uppercase;
  box-shadow: 0px 1px 2px #999;
  transition: 0.4s ease all;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 1px 4px #888;
  }
`;
