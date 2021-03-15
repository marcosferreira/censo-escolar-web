import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 100vh;
  padding-top: 100px;

  background-color: #f2f2f2;
  box-shadow: 1px 1px 10px #444;
  position: absolute;
  z-index: 4;
  top: 0;
  right: ${(props) => (props.show ? `0` : `-350px`)};

  ul {
    width: 100%;
    list-style: none;

    display: flex;
    flex-direction: column;

    li {
      width: 100%;
      margin: 0;
      a {
        text-decoration: none;
        margin: 0;

        p {
          width: 100%;
          padding: 20px 30px;
          &:hover {
            background-color: #ccc;
          }
        }
      }
    }
  }
`;
