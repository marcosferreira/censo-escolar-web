import React from "react";
import { useHistory } from "react-router-dom";

import { Form, InputLabel, Button } from "../../components/Form";
import { Container} from "./styles";
import logo from "../../assets/logo.png";

export default function SignIn() {
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();

    history.push("/home");
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <img src={logo} alt="logo" />
        <InputLabel type="text" name="cpf" label="CPF" required="true" />
        <InputLabel type="password" name="password" label="SENHA" required="true" />
        <Button>Entrar</Button>
      </Form>
    </Container>
  );
}
