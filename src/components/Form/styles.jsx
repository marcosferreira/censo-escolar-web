import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: ${(props) => props.maxWidth || `900px`};

  background-color: #fff;
  padding: 30px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  color: #555;

  fieldset {
    width: 100%;
    background-color: inherit;
    border: none;
    position: relative;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: inherit;
  font-size: 14px;

  display: block;
  position: relative;

  &:focus {
    border: 1px solid #999;
  }

  &:required:valid {
    outline: none;
    background-color: inherit;
    border: 1px solid #757575;
  }
`;

export const Select = styled.select`
  width: 100%;
  margin: 10px 0;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: inherit;
  font-size: 14px;

  display: block;
  position: relative;

  &:focus {
    border: 1px solid #999;
  }

  &:required:valid {
    outline: none;
    background-color: inherit;
    border: 1px solid #757575;
  }
`;

export const Label = styled.label`
  color: #bbb;
  font-size: 14px;
  font-weight: normal;
  pointer-events: none;

  position: absolute;
  left: 16px;
  top: 25px;

  transition: 0.2s ease all;

  ${Input}:focus ~ & {
    color: #888;
  }

  ${Input}:valid ~ & {
    top: 4px;
    font-size: 12px;
    color: #000;
    background-color: inherit;
  }

  ${Select}:focus ~ & {
    color: #888;
  }

  ${Select}:valid ~ & {
    top: 4px;
    font-size: 12px;
    color: #000;
    background-color: inherit;
  }
`;

export const ButtonPrimary = styled.button`
  min-width: 150px;
  margin-top: 10px;
  padding: 12px 15px;
  border: 1px solid ${(props) => props.backgroundColor || `#85C228`};
  background-color: ${(props) => props.backgroundColor || `#85C228`};
  color: ${(props) => props.color || `#FFF`};

  text-transform: uppercase;
  box-shadow: 0px 1px 2px #999;
  transition: 0.4s ease all;

  border-radius: 2px;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 1px 4px #888;
    border: 1px solid #7ab225;
    background: ${(props) => props.backgroundColorHover || `#7ab225`};
    color: ${(props) => props.color || `#FFF`};
  }
  &:active {
    box-shadow: 0px 1px 8px #888;
  }
`;

export const ButtonSecondary = styled.button`
  min-width: 150px;
  margin-top: 10px;
  padding: 12px 15px;
  border: 1px solid ${(props) => props.backgroundColor || `#85C228`};
  background-color: ${(props) => props.backgroundColor || `inherit`};
  color: ${(props) => props.color || `#85C228`};

  text-transform: uppercase;
  box-shadow: 0px 1px 2px #999;
  transition: 0.4s ease all;

  border-radius: 2px;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 1px 4px #888;
    border: 1px solid #7ab225;
    background: ${(props) => props.backgroundColorHover || `#7ab225`};
    color: ${(props) => props.color || `#FFF`};
  }
  &:active {
    box-shadow: 0px 1px 8px #888;
  }
`;
