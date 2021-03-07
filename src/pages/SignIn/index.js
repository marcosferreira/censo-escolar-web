import React from 'react';

import { Button, Container, Input, Label } from './styles';
import logo from '../../assets/logo.png';

export default function SignIn() {


  return (
    <Container>
      <form>
        <img src={logo} alt="logo" />
        <fieldset>
          <Input type="text" name="cpf" id="cpf" required />
          <Label for="cpf">CPF</Label>
        </fieldset>
        <fieldset>
          <Input type="password" name="password" id="password" required  />
          <Label for="password">SENHA</Label>
        </fieldset>
        <Button>Entrar</Button>
      </form>
    </Container>
  );
}
