import React from "react";
import { Link, useHistory } from "react-router-dom";

import { Form, InputLabel, Button } from "../../components/Form";

import { Container} from "./styles";

import logo from "../../assets/logo.png";

function SignUn() {
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    history.push("/home");
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <img src={logo} alt="logo" />
        <InputLabel type="text" name="firstname" label="NOME" required="true" />
        <InputLabel type="text" name="lastname" label="SOBRENOME" required="true" />
        <InputLabel type="text" name="cpf" label="CPF" required="true" />
        <InputLabel type="password" name="password" label="SENHA" required="true" />
        <Button>Cadastrar</Button>
        <Link to="/">Entrar</Link>
      </Form>
    </Container>
  );
}

export default SignUn
