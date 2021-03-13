import React, { useCallback } from "react";
import { Link, useHistory } from "react-router-dom";

import { useForm } from '../../hooks';
import { Form, InputLabel, Button } from "../../components/Form";
import { maskCPF } from '../../Utils';

import { Container} from "./styles";

import logo from "../../assets/logo.png";

function SignIn() {
  const history = useHistory();
  const [{ values, loading }, handleChange, handleSubmit] = useForm();

  const onSubmit = () => {
    console.log(values);
    history.push("/home");
  };

  const handleMaskCPF = useCallback((event) => {
    maskCPF(event);
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)} maxWidth="400px">
        <img src={logo} alt="logo" />
        <InputLabel type="text" name="cpf" label="CPF" onKeyUp={handleMaskCPF} onChange={handleChange} required />
        <InputLabel type="password" name="password" label="SENHA" required />
        <Button>{loading ? 'Entrando...' : 'ENTRAR'}</Button>
        <Link to="/signup">CADASTRAR</Link>
      </Form>
    </Container>
  );
}

export default SignIn;
