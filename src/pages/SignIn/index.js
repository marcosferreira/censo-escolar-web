import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Container, Input, Label } from './styles';
import logo from '../../assets/logo.png';

export default function SignIn() {
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();

    history.push('/home');
  }

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <img src={logo} alt="logo" />
        <fieldset>
          <Input type="text" name="cpf" required />
          <Label>CPF</Label>
        </fieldset>
        <fieldset>
          <Input type="password" name="password" required  />
          <Label>SENHA</Label>
        </fieldset>
        <Button>Entrar</Button>
      </form>
    </Container>
  );
}
