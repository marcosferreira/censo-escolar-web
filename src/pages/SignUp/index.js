import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { Form, InputLabel, Button } from '../../components/Form';

import { Container } from './styles';

import logo from '../../assets/logo.png';

import { api } from '../../services/api';
import { maskCPF } from '../../Utils';

function SignUp() {
  const [inputData, setInputData] = useState({});
  const [message, setMessage] = useState('');

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (event) => {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'applications/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(inputData),
    };

    fetch(`${api}/signup`, options)
      .then((response) => response.json())
      .then((data) => setMessage(data.message));

    event.preventDefault();
  };

  const handleMaskCPF = useCallback((event) => {
    maskCPF(event);
  }, [])

  return (
    <Container>
      <Form onSubmit={onSubmit} maxWidth="400px">
        <img src={logo} alt="logo" />
        <p>{message}</p>
        <InputLabel type="text" name="firstname" label="NOME" required onChange={handleInput} />
        <InputLabel type="text" name="lastname" label="SOBRENOME" required onChange={handleInput} />
        <InputLabel type="text" name="cpf" label="CPF" onKeyUp={handleMaskCPF} required onChange={handleInput} />
        <InputLabel type="password" name="password" label="SENHA" required onChange={handleInput} />
        <Button backgroundColor="#80C125" color="#FFF">
          Cadastrar
        </Button>
        <Link to="/">Login</Link>
      </Form>
    </Container>
  );
}

export default SignUp;
