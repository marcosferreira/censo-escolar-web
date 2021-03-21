import React from 'react';

import { Container } from './styles';
import { useHistory } from 'react-router-dom';


function NotFound() {
  const history = useHistory();
  return (
    <Container>
      <h1>Não Encontrado!!!</h1>
      <button onClick={() => history.goBack()}>Voltar</button>
    </Container>
  );
}

export default NotFound;
