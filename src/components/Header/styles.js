import styled from 'styled-components';

export const Container = styled.div`
  min-height: 120px;
  border-bottom: 4px solid #fab734;
  background-color: #f2f2f2;
  color: #000;
  padding: 0;
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 200px;
  }
`;

export const HeaderGroupButton = styled.div`
  z-index: 5;
  button {
    margin: 0 5px;
    padding: 10px;
    border: none;
    background-color: inherit;
    z-index: 5;
    opacity: 0.5;

    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`;
